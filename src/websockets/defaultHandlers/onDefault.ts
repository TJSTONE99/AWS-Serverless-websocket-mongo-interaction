import { responses } from '../../util/responses'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

export const handler = async (event:APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> =>{
    return responses._200({message: 'default'})
}