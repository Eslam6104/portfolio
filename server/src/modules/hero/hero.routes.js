import {getHero,updateHero,addHero} from "./hero.service.js";
import express from "express";
const heroRouter=express.Router();
heroRouter.get("/",getHero);
heroRouter.post("/",addHero);
heroRouter.put("/",updateHero);
export default heroRouter;
