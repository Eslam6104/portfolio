import Section from "./section.model.js";
import mongoose from "mongoose";
export const getSections = async (req, res, next) => {
try{
    
const sections = await Section.find().sort({ order: 1 });    
return res.status(200).json(sections);
}
catch(err){
    next(err);
}
}
export const addSection = async (req, res, next) => {
try{
    const {key,label,title,description,order,isActive} = req.body;
    const newSection = await Section.create({
        key,label,title,description,order,isActive
    })
   return res.status(201).json(newSection);
}
catch(err){
    return next(err);}
}
export const updateSection = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid section ID",
      });
    }
const { key, label, title, description, order, isActive } = req.body;
    const section = await Section.findByIdAndUpdate(
      id,
      {key,label,title,description,order,isActive},
      {
        new: true,
        runValidators: true,
      }
    );
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }
   return res.status(200).json({
      success: true,
      data: section,
    });
  } catch (err) {
    next(err);
  }
};