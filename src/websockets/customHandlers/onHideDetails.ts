import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import { throwError } from "../../util/errorHandler"
import { responses } from '../../util/responses'
import { newId } from '../../util/helperUtilities/newId'
import { convertToBase64 } from '../../util/helperUtilities/convertToBase64'
import { send } from '../../sendToClient'
import { clientMessageModel } from "../../util/models/operationModels"

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    try
    {
        const context = event.requestContext

        const message:clientMessageModel = {
            _id:await convertToBase64(newId()),
            clientID:context.connectionId!,
            date: Date.now(),
            domainName: context.domainName!,
            stage: context.stage,
            message: {status:'success', response:'_hideDetails', body: {message:'Hide Detail App Display'}}
        }
        await send([message])
        
        return responses._200({ message: 'initialised' })
    }
    catch (exception){
        await throwError(exception)
        return responses._400({ message: 'Server Side Error' })
    }
}