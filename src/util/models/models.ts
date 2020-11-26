export interface insertClientModel{
    _id: string,
    clientID: string,
    clientName: string,
    date: number,
    domainName:string,
    stage: string
}

export interface deleteModel{
    clientID:string
}

export interface insertMessageModel{
    _id: string,
    clientID:string,
    recipientClientID?: string,
    message:string,
    date: number,
    domainName:string,
    stage: string
}