import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import { findAllConnectedClients } from '../../util/databaseUtilities/findDocuments'
import { throwError } from "../../util/errorHandler"
import { responses } from '../../util/responses'
import { newId } from '../../util/helperUtilities/newId'
import { convertToBase64 } from '../../util/helperUtilities/convertToBase64'
import { send } from '../../sendToClient'
import { clientMessageModel } from "src/util/models/operationModels"
import { insertClientModel } from "src/util/models/models"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try
    {
        const context = event.requestContext
        const body = JSON.parse(event.body!)
        //search mongo for clients
        const _clients:insertClientModel[] = await findAllConnectedClients(context.connectionId!)
    
        const message:clientMessageModel = {
            _id:await convertToBase64(newId()),
            clientID:context.connectionId!,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage,
            message: {status:'success', response:'_listAllClients', body: {clients:_clients as []}}
        }
        await send([message])
        
        return responses._200({ message: 'connected' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}