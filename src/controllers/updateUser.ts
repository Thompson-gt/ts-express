import express, { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/userInterface";

//prisma client
import prisma from "../client";
import hashPassword from "./helpers/hashpass";
const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id.slice(-1)
        const { name, email, password }: User = req.body;
        const hashPass = await hashPassword(password)
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                email,
                name,
                password: hashPass

            }
        });
        if (user) {
            res.status(200).send(user)
        }
        else {
            res.status(404).send({ "message": "user not found" })
        }

    } catch (error) {
        console.log(error)
    }

}
export default updateUser