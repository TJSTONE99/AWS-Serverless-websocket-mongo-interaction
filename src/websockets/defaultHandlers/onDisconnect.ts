import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { responses } from '../../util/responses'
import { throwError } from "../../util/errorHandler"
import { deleteClientDoc, deleteMessageDocs } from '../../util/databaseUtilities/deleteDocument'
import { deleteModel } from '../../util/models/models'
import { send } from "../../sendToClient"
import { convertToBase64 } from "../../util/helperUtilities/convertToBase64"
import { newId } from "../../util/helperUtilities/newId"
import { findAllConnectedClients, findClientByID } from "../../util/databaseUtilities/findDocuments"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try {
        const context = event.requestContext
        const params:deleteModel = {clientID: context.connectionId!}
        const toBeDeletedClient = await findClientByID(params.clientID)
        if (toBeDeletedClient)
        {
            await deleteClientDoc(params)
            await deleteMessageDocs(params)
            const _stillConnectedClients = await findAllConnectedClients(context.connectionId!)
    
            for (const _client of _stillConnectedClients)
            {
                await send([
                    {
                        _id: await convertToBase64(newId()),
                        clientID: _client.clientID,
                        message: {status:'success', response:'_clientRemovedFromRoom', body:{ client: toBeDeletedClient }},
                        date: Date.now(),
                        domainName: _client.domainName,
                        stage: _client.stage
                    }
                ])
            }
        }

        return responses._200({ message: 'disconnected' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}