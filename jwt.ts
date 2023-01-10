/* eslint-disable @typescript-eslint/no-var-requires */
const crypt = require('crypto')
const base64Url = require('base64url')

const header = {
  alg: 'HS256',
  typ: 'JWT'
}
const payload = {
  username: 'bruce@email.com',
  name: 'Bruce Wayne',
  exp: new Date().getTime()
}
const key = 'mysecretword'
const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64')
const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64')

const signature = crypt.createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin')

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url(signature)}`)
