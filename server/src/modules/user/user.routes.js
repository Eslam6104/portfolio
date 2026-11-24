import {getUser,addUser,updateUser} from "./user.service.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/",getUser);
userRouter.post("/",addUser);
userRouter.put("/",updateUser);
export default userRouter;