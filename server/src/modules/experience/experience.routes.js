import {getExperiences,
    getExperienceById, 
    createExperience, 
    updateExperience, 
    deleteExperience} from "./experience.service.js";

import express from "express";
const experienceRouter = express.Router();
experienceRouter.get("/",getExperiences);
experienceRouter.get("/:id",getExperienceById);
experienceRouter.post("/",createExperience);
experienceRouter.put("/:id",updateExperience);
experienceRouter.delete("/:id",deleteExperience);
export default experienceRouter;