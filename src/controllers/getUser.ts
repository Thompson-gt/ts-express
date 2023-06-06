import express, { Request, Response, NextFunction } from "express";

//prisma client
import prisma from "../client";

const getUser = async (req: Request, res: Response) => {
    try {
        const param = req.params.id;
        const id = param.slice(-1)
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
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
export default getUser