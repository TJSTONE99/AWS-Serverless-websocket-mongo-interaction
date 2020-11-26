import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import { findAllMessagesForClient } from '../../util/databaseUtilities/findDocuments'
import { throwError } from "../../util/errorHandler"
import { responses } from '../../util/responses'
import { newId } from '../../util/helperUtilities/newId'
import { convertToBase64 } from '../../util/helperUtilities/convertToBase64'
import { send } from '../../sendToClient'
import { clientMessageModel } from "src/util/models/operationModels"
import { insertMessageModel } from "src/util/models/models"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try
    {
        const context = event.requestContext
        const body = JSON.parse(event.body!)
        //search mongo for messages for specific client
        const _clientMessages:insertMessageModel[] = await findAllMessagesForClient(body.clientID)
    
        const message:clientMessageModel = {
            _id:await convertToBase64(newId()),
            clientID:context.connectionId!,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage,
            message: {status:'success', response:'_listAllMessagesForClient', body: {clients:_clientMessages as []}}
        }
        await send([message])
        
        return responses._200({ message: 'connected' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}