import {Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/user.js";
const requireAuth = async (req: Request, res: Response, next: NextFunction) => {

    // verify authenticatino

    const authorization = req.headers['authorization'];

    if(!authorization){
        return res.status(401).json({error:'You must be logged in'})
    }

    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET as string;
    
    if(!secret){
        return res.status(500).json({error: 'Server configuration error'})
    }

    try{
        const {_id} = jwt.verify(token, secret) as {_id: string};
        req.user = await User.findById({_id}).select('_id');
        next();
    }catch(err) {
        return res.status(401).json({error: 'Invalid token'})
    }
}

export default requireAuth;