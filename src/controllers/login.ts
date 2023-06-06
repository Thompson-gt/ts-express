import express, { Request, Response, NextFunction } from "express";
import prisma from "../client";
import bcrypt from 'bcrypt'
import { User } from '../interfaces/userInterface'

const loginIn = async (req: Request, res: Response) => {
    try {
        const { email, password, name }: User = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                name: true,
                password: true,
                email: true
            }
        });
        const validPassword: boolean = await bcrypt.compare(req.body.password, user!.password)
        if (!validPassword) {
            res.status(401).send({ "message": "password invalid" })
        } else {
            res.status(200).send(user)
        }
    } catch (error) {
        console.log(error)
    }

}

export default loginIn;