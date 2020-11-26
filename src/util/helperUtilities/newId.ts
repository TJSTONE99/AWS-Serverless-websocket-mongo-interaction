import { v1 } from 'uuid'
import { strToBinary } from './strToBinary'
import { Binary } from 'mongodb'

export const newId = (): Binary => {
  const strUuid = v1().replace(/-/g, '')
  const buffer = Buffer.from(strUuid, 'hex').toString('base64')
  return strToBinary(buffer)
}
