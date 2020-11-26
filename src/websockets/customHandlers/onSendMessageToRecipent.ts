import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { responses } from '../../util/responses'
import { throwError } from "../../util/errorHandler"
import { insertMessageDoc } from '../../util/databaseUtilities/insertDocument'
import {getClientForID } from '../../util/databaseUtilities/findDocuments'
import { insertClientModel, insertMessageModel } from '../../util/models/models'
import { newId } from '../../util/helperUtilities/newId'
import { convertToBase64 } from '../../util/helperUtilities/convertToBase64'
import { send } from '../../sendToClient'
import { clientMessageModel } from "src/util/models/operationModels"
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try {
        const context = event.requestContext
        const body = JSON.parse(event.body!)
        const payload:insertMessageModel = {
            _id: await convertToBase64(newId()),
            clientID: context.connectionId!,
            recipientClientID: body.params.recipentClientID,
            message: body.params.value,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage
        }
        await insertMessageDoc(payload)

        const clientMessage:clientMessageModel = {
            _id: await convertToBase64(newId()),
            clientID: context.connectionId!,
            recipientClientID: body,
            message: {status:'success', response:'_sendMessageToRecipent', body: {message:{ value: body.params.value, senderID:payload.clientID }}},
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage
        }

        const recipentClient: insertClientModel = await getClientForID(body.params.recipentClientID)

        const outboundMessage:clientMessageModel = {
            _id: await convertToBase64(newId()),
            clientID: recipentClient.clientID!,
            message: {status:'success', response:'_recievedMessageFromClient', body: {message: { senderClientID: context.connectionId!, value: body.params.value}}},
            date: Date.now(),
            domainName: recipentClient.domainName!,
            stage: recipentClient.stage
        }
        
        await send([clientMessage, outboundMessage])

        return responses._200({ message: 'received message' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}