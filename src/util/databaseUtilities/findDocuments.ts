import { client } from './connect' 
import { env } from '../config'
import { insertClientModel, insertMessageModel } from '../models/models'
import { insertClientDoc } from './insertDocument'

export const findAllConnectedClients = async (excludedClientID:string):Promise<Array<insertClientModel>> => {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('clients').find({ clientID: { $ne: excludedClientID } }, {projection: { _id: 0}}).toArray()
}

export const findClientByID = async (clientID:string):Promise<insertClientModel>=> {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('clients').findOne({ clientID: clientID })!
}

export const findAllMessagesForClient = async (_clientID:string):Promise<Array<insertMessageModel>> => {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('messages').find({clientID:_clientID}).toArray()
}

export const getClientForID = async (_clientID: string): Promise<insertClientModel> =>{
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('clients').findOne({ clientID: _clientID })!
}