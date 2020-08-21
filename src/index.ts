import * as jwt from 'jsonwebtoken'

export type SignOptions = jwt.SignOptions

export type VerifyOptions = jwt.VerifyOptions

export const sign = (
  payload: Record<string, unknown>,
  secret: string,
  options?: jwt.SignOptions
) => {
  return new Promise<string>((resolve, reject) => {
    const callback: jwt.SignCallback = (error, encoded) => {
      if (error) {
        reject(error)
      } else {
        resolve(encoded)
      }
    }
    if (options === undefined) {
      jwt.sign(payload, secret, callback)
    } else {
      jwt.sign(payload, secret, options, callback)
    }
  })
}

export const verify = <T extends Record<string, unknown>>(
  token: string,
  secret: string,
  options?: jwt.VerifyOptions
) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return new Promise<T>((resolve, reject) => {
    const callback: jwt.VerifyCallback = (error, decoded) => {
      if (error || !decoded) {
        reject(error)
      } else {
        resolve(decoded as T)
      }
    }

    if (options === undefined) {
      jwt.verify(token, secret, callback)
    } else {
      jwt.verify(token, secret, options, callback)
    }
  })
}
