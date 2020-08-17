import * as jwt from 'jsonwebtoken'

export type SignArguments =
  [Record<string, unknown>, string, jwt.SignOptions, jwt.SignCallback]
  | [Record<string, unknown>, string, jwt.SignCallback]

export type VerifyArguments =
  [string, string, jwt.VerifyOptions, jwt.VerifyCallback]
  | [string, string, jwt.VerifyCallback]
