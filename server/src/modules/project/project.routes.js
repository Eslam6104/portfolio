import {getProjects, 
    getProjectById,
     addProject,
      updateProject,
      deleteProject} 
      from "./project.service.js";
import express from "express";
const projectRouter = express.Router();
projectRouter.get("/",getProjects);
projectRouter.get("/:id",getProjectById);
projectRouter.post("/",addProject);
projectRouter.put("/:id",updateProject);
projectRouter.delete("/:id",deleteProject);
export default projectRouter;