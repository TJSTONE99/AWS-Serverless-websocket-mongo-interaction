import { MongoClient } from 'mongodb'
import { env } from '../config'
let _client:MongoClient
export const client = async ():Promise<MongoClient> => {
    if (!_client) _client = await MongoClient.connect(`${env.DatabaseConnectionString!}:${env.DatabaseConnectionPort!}`,  { useNewUrlParser: true, useUnifiedTopology: true})
    return _client
}