import project from "./project.model.js";
import mongoose from "mongoose";
export const getProjects = async (req, res, next) => {
    try {
        const projects = await project.find({ isActive: true }).sort({ order: 1 });
        
        return res.status(200).json(projects);
    }
    catch (err) {
        next(err);
    }
}
export const getProjectById = async (req, res, next) => {
    try {
        const {id}= req.params;
        if (!id) {
            return res.status(400).json({ message: "Project ID is required" });
        }
        const projectData  = await project.findById(id);
        if(projectData && !projectData.isActive){
            return res.status(404).json({ message: "Project not active" });
        }
        if (!projectData) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json(projectData);
    }
    catch (err) {
        next(err);
    }
}
export const addProject = async (req, res, next) => {
try {
  
    const { iconUrl, title, category, description, technologies, liveUrl, githubUrl,
  order } = req.body;
    const newProject = await project.create({
        iconUrl, title, category, description, technologies, liveUrl, githubUrl, order
    })
    return res.status(201).json(newProject);
} catch (err) {
    next(err);
}

}
export const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Project ID is required" });
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ message: "Invalid Project ID" });
        }
       const existingProject = await project.findById(id);
        if (!existingProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        const { iconUrl, title, category, description, technologies, liveUrl, githubUrl,
  order } = req.body;
        const updatedProject = await project.findByIdAndUpdate(
            id,{ iconUrl, title, category, description, technologies, liveUrl, githubUrl, order })
          return res.status(200).json(updatedProject);
        
} catch (err) {
  return next(err);
}

}
export const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const projectToDelete = await project.findByIdAndUpdate(id, { isActive: false });
        res.status(200).json({ message: "Project deleted successfully", project: projectToDelete });


    }
    catch (err) {
  return next(err);
}

}
