import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import { throwError } from "../../util/errorHandler"
import { responses } from '../../util/responses'
import { insertClientDoc } from '../../util/databaseUtilities/insertDocument'
import { insertClientModel } from '../../util/models/models'
import { newId } from '../../util/helperUtilities/newId'
import { convertToBase64 } from '../../util/helperUtilities/convertToBase64'
import { send } from '../../sendToClient'
import { clientMessageModel } from "../../util/models/operationModels"
import { findAllConnectedClients } from "../../util/databaseUtilities/findDocuments"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try
    {
        const context = event.requestContext
        const body = JSON.parse(event.body!)
        //insert session into mongo
        const payload:insertClientModel = {
            _id:await convertToBase64(newId()),
            clientID:context.connectionId!,
            clientName: body.params.name,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage
        }
        await insertClientDoc(payload)

        const message:clientMessageModel = {
            _id:await convertToBase64(newId()),
            clientID:context.connectionId!,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage,
            message: {status:'success', response:'_initialise', body: {message:'Initialisation Successful'}}
        }
        await send([message])

        const _clients:insertClientModel[] = await findAllConnectedClients(context.connectionId!)
        for (const client of _clients)
        {
            const message:clientMessageModel = {
                _id:await convertToBase64(newId()),
                clientID:client.clientID!,
                date: Date.now(),
                domainName: client.domainName!,
                stage: client.stage,
                message: {status:'success', response:'_clientAddedToRoom', body: {client:payload}}
            }
            await send([message])
        }

        
        return responses._200({ message: 'initialised' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}