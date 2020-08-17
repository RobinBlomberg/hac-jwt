import * as jwt from 'jsonwebtoken'
import { SignArguments, VerifyArguments } from './types'

export type SignOptions = jwt.SignOptions

export type VerifyOptions = jwt.VerifyOptions

export const signToken = (
  payload: object,
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

export const verifyToken = (
  token: string,
  secret: string,
  options?: jwt.VerifyOptions
) => {
  return new Promise<Record<string, any>>((resolve, reject) => {
    const args: VerifyArguments = [
      token,
      secret,
      (error, decoded) => {
        if (error) {
          reject(error)
        } else {
          resolve(decoded)
        }
      }
    ]

    if (options !== undefined) {
      args.splice(2, 0, secret)
    }

    jwt.verify(...args)
  })
}
