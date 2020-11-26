import * as AWS from "aws-sdk";

const create = (domainName:string, stage:string):AWS.ApiGatewayManagementApi => {
    const endpoint = `${domainName}/${stage}`
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint,
    })
}

export const send = async (domainName:string, stage:string, connectionID:string, message:string) => {

    const ws = create(domainName, stage)
    const postParams = {
        Data: message,
        ConnectionId: connectionID,
    };

    return await ws.postToConnection(postParams)
}