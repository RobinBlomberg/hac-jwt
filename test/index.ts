import * as Jwt from '../src'
import { deepStrictEqual, strictEqual } from 'assert'

;(async() => {
  const encoded = await Jwt.signToken({
    object: {
      foo: 45
    },
    username: 'foobar'
  }, 'secret')

  const decoded = await Jwt.verifyToken(encoded, 'secret')
  
  deepStrictEqual(
    decoded.object,
    {
      foo: 45
    }
  )
  strictEqual(
    decoded.username,
    'foobar'
  )
  strictEqual(
    typeof decoded.iat,
    'number'
  )

  console.log('\u001b[32m✓ Test "hcu-jwt" passed.\u001b[39m')
})()
