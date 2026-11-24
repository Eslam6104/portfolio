import {getSections, updateSection, addSection, } from "./section.service.js";
import express from "express";
const sectionRouter = express.Router();
sectionRouter.get("/", getSections)
sectionRouter.post("/", addSection)
sectionRouter.put("/:id", updateSection)
export default sectionRouter;