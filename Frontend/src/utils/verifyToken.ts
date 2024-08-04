import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();

 const verifyToken = (token: string): string | object | null => {
    console.log('here')
  try {

    const secret = process.env.NEXT_PUBLIC_JWT_SECRET
    console.log('env',secret)

    console.log('I am inside verifyToken')
    const decoded = jwt.verify(token, secret || '')
    console.log(token, process.env.NEXT_PUBLIC_JWT_SECRET)
    console.log('decoded',decoded)
    console.log('I am going from verifyToken')
    return decoded;
  } catch (error) {
    return null;
  }
};

export default verifyToken;