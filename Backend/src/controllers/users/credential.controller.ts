import { User } from "../../models/user.js";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const handleCreateUser = async (req: Request, res: Response) => {

    try {
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: 'Internal server error' })
    }
}

const handleLoginUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        // user.password is coming from db

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // Generate JWT token
        const jwtSecret =  process.env.JWT_SECRET
        if(!jwtSecret){
            return res.status(500).json({ error: 'Server configuration error' });
        }
        const token = jwt.sign({ _id: user._id, email: user.email },jwtSecret );

        res.cookie('token', token, {
            httpOnly: true, // Accessible only by the web server
            secure: false,   // Send only over HTTPS
            maxAge: 360000000,
            sameSite: 'strict' 
          })
        
          res.status(200).json({message:'Login Successfull',token: token, user: user.username});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

export {
    handleCreateUser,
    handleLoginUser,
};