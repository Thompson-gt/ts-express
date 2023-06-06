import express, { Request, Response, NextFunction } from "express";

//local imports 
import hashPassword from './helpers/hashpass'
import checkEmail from "./helpers/checkEmail";
import prisma from "../client";
import { User } from '../interfaces/userInterface'

const createUser = async (req: Request, res: Response) => {
    const { name, email, password }: User = req.body;
    const validEmail = checkEmail(email)
    if (!validEmail) {
        return res.status(406).send({ "message": "please give a valid email" })
    } else {
        try {
            const hash = await hashPassword(password)
            // const salt = await bcrypt.genSalt(10)
            // const hash = await bcrypt.hash(password,salt)

            const _ = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hash,


                }
            });
            return res.status(200).send({ "message": "user created" })
        } catch (error) {
            console.log(error)
            return res.status(500)
        }

    }
}

export default createUser