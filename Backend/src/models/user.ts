import { Document } from "mongoose";


import { Schema, model } from "mongoose";
import {createHmac, randomBytes} from 'crypto';


interface Iuser extends Document{
    fullName: string;
    email: string;
    salt: string;
    password: string;
    profileImage: 'USER'| 'ADMIN';
}
const userSchema = new Schema<Iuser>({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    salt:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    profileImage:{
        type: String,
        enum: ['USER','ADMIN'],
        default: 'USER',
    }

}, {timestamps: true}
);

userSchema.pre<Iuser>('save', function (next) {
    const user = this as Iuser;

    if(!user.isModified('password')) return next();

    const salt = randomBytes(16).toString();

    const hashedPassword = createHmac('sha256',salt)
        .update(user.password)
        .digest('hex')

    this.salt = salt
    this.password = this.password

    next();

})

const User = model('User',userSchema)

module.exports = User;