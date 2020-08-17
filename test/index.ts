import * as Jwt from '../src'
import { deepStrictEqual, strictEqual } from 'assert'

type IPayload = {
  iat: number
  object: {
    foo: number
  }
  username: string
}

;(async() => {
  const encoded = await Jwt.sign({
    object: {
      foo: 45
    },
    username: 'foobar'
  }, 'secret')

  const decoded = await Jwt.verify<IPayload>(encoded, 'secret')

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
