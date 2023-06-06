import { Express, Router } from "express";

//user controllers

import createUser from "../controllers/createUser";
import getUser from "../controllers/getUser";
import loginUser from "../controllers/login";
import updateUser from "../controllers/updateUser";
import deleteUser from "../controllers/deleteUser";

const router = Router()


router.post("/user", createUser)
router.get("/user/:id/", getUser)
router.get("/login", loginUser)
router.put("/user/:id/", updateUser)
router.delete("/user/:id/", deleteUser)

export default router;