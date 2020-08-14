# HAC JWT

## Installation

```
npm install https://bitbucket.org/nkpgSaberRiders/hacjwt
```

## Usage

```javascript
import * as Jwt from 'hac-jwt'

const signAndVerifyToken = async() => {
  const encoded = await Jwt.signToken({ foo: 'bar' }, process.env.JWT_SECRET)
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1OTc0MTIxMjN9.46IFNolbMeYSC61my8YQ-RUaJ70Ft_ilp4MCqIYRpRY

  const decoded = await Jwt.verifyToken(encoded, process.env.JWT_SECRET)
  // { foo: 'bar', iat: 1597412123 }
}
```
