import * as jwt from 'jsonwebtoken'

export type SignArguments =
    [object, string, jwt.SignOptions, jwt.SignCallback]
  | [object, string, jwt.SignCallback]

export type VerifyArguments =
    [string, string, jwt.VerifyOptions, jwt.VerifyCallback]
  | [string, string, jwt.VerifyCallback]
