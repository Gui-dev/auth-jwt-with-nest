/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt')
const saltRounds = 10
const password = process.argv.slice(2)[0]

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.log('ERROR: ', err)
  }
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      console.log('ERROR_HASH: ', err)
    }
    console.log(hash)
  })
})
