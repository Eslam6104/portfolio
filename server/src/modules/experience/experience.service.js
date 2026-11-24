import experience from "./experience.model.js";
export const getExperiences = async (req, res, next) => {
    try {
        const experiences = await experience.find({ isActive: true }).sort({ order: 1 });
        return res.status(200).json(experiences);
    } catch (err) {
        next(err);
    }
}
export const getExperienceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Experience ID is required" });
        }
       const experienceData = await experience.findOne({
               _id: id,
            isActive: true
});
        if (!experienceData) {
            return res.status(404).json({ message: "Experience not found" });
        }
        return res.status(200).json(experienceData);
    } catch (err) {
        next(err);
    }
}
export const createExperience = async (req, res, next) => {
    try {
        const {
            position,
            company,
            employmentType,
            workMode,
            startDate,
            endDate,
            isCurrent,
            description,
            technologies,
            order
        } = req.body;

        const newExperience = await experience.create({
            position,
            company,
            employmentType,
            workMode,
            startDate,
            endDate,
            isCurrent,
            description,
            technologies,
            order
        });

        return res.status(201).json(newExperience);
    } catch (err) {
        next(err);
    }
};
export const updateExperience = async (req, res, next) => {
    try {
        const { id } = req.params;
        const existingExperience = await experience.findById(id);
        if(!existingExperience){
            return res.status(404).json({ message: "Experience not found" });
        }
        if(existingExperience && !existingExperience.isActive){
            return res.status(404).json({ message: "Experience not active" });
        }
        const { position, company, employmentType, workMode, startDate, endDate, isCurrent, description, technologies, order } = req.body;
        const experienceData = {
            position,
            company,
            employmentType,
            workMode,
            startDate,
            endDate,
            isCurrent,
            description,
            technologies,
            order,
            
        };
const updatedExperience = await experience.findByIdAndUpdate(
    id,
    experienceData,
    {
        new: true,
        runValidators: true
    }
);        if (!updatedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        return res.status(200).json(updatedExperience);
    } catch (err) {
        next(err);
    }
}
export const deleteExperience = async (req, res, next) => {
    try {
        const { id } = req.params;
        const existingExperience = await experience.findById(id);
        if(!existingExperience){
            return res.status(404).json({ message: "Experience not found" });
        }
        if(existingExperience && !existingExperience.isActive){
            return res.status(404).json({ message: "Experience not active" });
        }

        const deletedExperience = await experience.findByIdAndUpdate(id,{isActive:false},{new:true});
        if (!deletedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        return res.status(200).json({ message: "Experience deleted successfully" });
    } catch (err) {
        next(err);
    }}

