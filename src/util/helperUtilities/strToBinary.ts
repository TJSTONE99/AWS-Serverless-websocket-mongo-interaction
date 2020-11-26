import { Binary } from 'mongodb'

export const strToBinary = (str: any): Binary => {
  if (str.buffer) {
    return str
  }
  let obj
  if (typeof str === 'object') {
    if ('$binary' in str) {
      obj = str.$binary
    } else if ('[$]binary' in str) {
      obj = str['[$]binary']
    }
  } else if (str.indexOf('$binary') > -1) {
    obj = JSON.parse(str).$binary
  } else if (str.indexOf('[$]binary') > -1) {
    obj = JSON.parse(str)['[$]binary']
  } else {
    obj = str
  }

  return new Binary(Buffer.from(obj, 'base64'), 3)
}
