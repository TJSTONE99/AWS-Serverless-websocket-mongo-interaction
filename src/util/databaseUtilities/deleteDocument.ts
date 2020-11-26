import { DeleteWriteOpResultObject } from 'mongodb'
import { client } from './connect' 
import { env } from '../config'
import { deleteModel } from '..//models/models'
export const deleteClientDoc = async (params:deleteModel):Promise<DeleteWriteOpResultObject> => {
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('clients').deleteOne(params)
}

export const deleteMessageDocs = async (params:deleteModel): Promise<DeleteWriteOpResultObject> =>{
    const _client = await client()
    return await _client.db(env.DatabaseName!).collection('messages').deleteMany(params)
}