import * as AWS from "aws-sdk"
import { clientMessageModel } from './util/models/operationModels'

const create = (domainName:string, stage:string):AWS.ApiGatewayManagementApi => {
    const endpoint = `${domainName}/${stage}`
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint:"http://localhost:3001",
    })
}

export const send = async (payload:Array<clientMessageModel>) => {
    payload.map(async (client) => {
        const ws = create(client.domainName, client.stage)
        return await ws.postToConnection({ ConnectionId:client.clientID, Data:JSON.stringify(client.message) }).promise()
    })
}