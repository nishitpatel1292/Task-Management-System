import { Document } from "mongoose";


import { Schema, model } from "mongoose";
import {createHmac, randomBytes} from 'crypto';


export interface Iuser extends Document{
    username: string;
    email: string;
    salt: string;
    password: string;
    role: 'USER'| 'ADMIN';
    profileImg: string;
}
const userSchema = new Schema<Iuser>({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }

}, {timestamps: true}
);



export const User = model('User',userSchema)

