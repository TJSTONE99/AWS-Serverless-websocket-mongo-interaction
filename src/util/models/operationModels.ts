export interface clientMessageModel{
    _id: string,
    clientID:string,
    recipientClientID?: string,
    message:{
        status: string,
        response: string,
        body: {
            message?: {},
            error?: string,
            clients?: []
            client?:{}
        }
    },
    date: number,
    domainName:string,
    stage: string
}