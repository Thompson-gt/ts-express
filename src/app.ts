import express from "express";
import dotenv from 'dotenv'
dotenv.config()


//controllers
import createUser from './controllers/createUser';
import getUser from './controllers/getUser';
import loginUser from './controllers/login'
import deleteUser from "./controllers/deleteUser";
import updateUser from "./controllers/updateUser";

//user router
import userRouter from "./routes/user.route";

const app = express();

app.use(express.json());
app.use("/", userRouter)
app.get("/", (req, res) => {
    res.send("hello ")
});

app.post("/user", createUser)
app.get("/user/:id/", getUser)
app.get("/login", loginUser)
app.put("/user/:id/", updateUser)
app.delete("/user/:id/", deleteUser)
const { API_PORT } = process.env;
const port: number = 5000 || API_PORT

app.listen(port, () => {
    console.log("server is starting")
}) 
