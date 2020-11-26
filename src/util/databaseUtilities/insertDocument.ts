import { InsertOneWriteOpResult } from 'mongodb'
import { client } from './connect' 
import { env } from '../config'
import { insertClientModel, insertMessageModel } from '../models/models'

export const insertClientDoc = async (paylod:insertClientModel):Promise<InsertOneWriteOpResult<any>> => {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('clients').insertOne(paylod)
}

export const insertMessageDoc = async (paylod:insertMessageModel):Promise<InsertOneWriteOpResult<any>> => {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('messages').insertOne(paylod)
}