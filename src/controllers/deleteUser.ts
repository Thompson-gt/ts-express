import express, { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import { User } from '../interfaces/userInterface'

//prisma client
import prisma from "../client";

const deleteUser = async (req: Request, res: Response) => {
    try {
        const param = req.params.id;
        const id = param.slice(-1)
        const user = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(204).send({ "message": "user deleted" })

    } catch (error) {
        console.log(error)
    }

}
export default deleteUser