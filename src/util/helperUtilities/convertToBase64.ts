import { strToBinary } from './strToBinary'

export const convertToBase64 = async (str: any): Promise<string> => {  
  return await strToBinary(str).buffer.toString('base64')
}
