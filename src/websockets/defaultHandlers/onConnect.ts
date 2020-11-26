import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import { throwError } from "../../util/errorHandler"
import { responses } from '../../util/responses'
import { send } from '../../sendToClient'
import { convertToBase64 } from "../../util/helperUtilities/convertToBase64"
import { newId } from "../../util/helperUtilities/newId"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try
    {
        const context = event.requestContext
        //send message to await initialise of client
        await send([
            {
                _id: await convertToBase64(newId()),
                clientID: context.connectionId!,
                message: {status:'success', response:'_onConnect', body:{ message: 'Initialisation Required' }},
                date: Date.now(),
                domainName: context.domainName!,
                stage: context.stage
            }
        ])
        return responses._200({ message: 'connected' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}