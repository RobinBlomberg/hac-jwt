import * as jwt from 'jsonwebtoken'
import { SignArguments, VerifyArguments } from './types'

export type SignOptions = jwt.SignOptions

export type VerifyOptions = jwt.VerifyOptions

export const sign = (
  payload: Record<string, unknown>,
  secret: string,
  options?: jwt.SignOptions
) => {
  return new Promise<string>((resolve, reject) => {
    const args: SignArguments = [
      payload,
      secret,
      (error, encoded) => {
        if (error) {
          reject(error)
        } else {
          resolve(encoded)
        }
      }
    ]

    if (options !== undefined) {
      args.splice(2, 0, secret)
    }

    jwt.sign(...args)
  })
}

export const verify = <T extends Record<string, unknown>>(
  token: string,
  secret: string,
  options?: jwt.VerifyOptions
) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return new Promise<T>((resolve, reject) => {
    const args: VerifyArguments = [
      token,
      secret,
      (error, decoded) => {
        if (error || !decoded) {
          reject(error)
        } else {
          resolve(decoded as T)
        }
      }
    ]

    if (options !== undefined) {
      args.splice(2, 0, secret)
    }

    jwt.verify(...args)
  })
}
