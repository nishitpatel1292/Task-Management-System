import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { Iuser } from "../models/user.js";

const secret = crypto.randomBytes(64).toString('hex')

// create token using user id
const createToken = (user: Iuser)=> {
    
    const payload = {
        _id: user._id,
        email:user.email,
        role: user.role   
    }
    const token = jwt.sign(payload,secret);
    return token;
}

function validateToken(token: string){
    const payload = jwt.verify(token, secret);
    console.log(secret)
    return payload
}


module.exports = {
    createToken,
    validateToken,
}