import { client } from './connect' 
export const disconnect = async ():Promise<void> => {
    return await (await client()).close()
}