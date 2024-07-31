import { Router, Request, Response } from "express";
// import  User  from './models/user.ts';
import { User } from "../models/user.js";
import {handleCreateUser, handleLoginUser} from "../controllers/users/credential.controller.js"

const router = Router();


router.post('/signup',handleCreateUser )
router.post('/login',handleLoginUser)


export default router;