import about from './about.model.js';
import upload from '../../middlewares/upload.middleware.js';
import fs from "fs/promises";
import path from "path";
export const getAbout= async (req, res, next) => {
    try{
        const aboutData = await about.findOne();
        if(!aboutData){
            return res.status(404).json({message:"About data not found"});
        }
        return res.status(200).json(aboutData);
    }
    catch(err){
        next(err);
    }
}
export const addAbout= async (req, res, next) => {
try{
    const {title,description} = req.body;
    const aboutCards = JSON.parse(req.body.aboutCards);
    const existingAbout = await about.findOne();
    if(existingAbout){
        return res.status(400).json({message:"About data already exists"});
    }
  const newAbout = await about.create({title,description,aboutCards, 
     image: req.file
        ? `/uploads/${req.params.section}/${req.file.filename}`
        : undefined
    });
 return res.status(201).json(newAbout);


}
catch(err){
    return next(err);}

}
export const updateAbout= async (req, res, next) => {
    try{
    const existingAbout = await about.findOne();
    if (!existingAbout) {
      return res.status(404).json({
        message: "About section not created yet. Please create it first.",
      });
    }
      const {title,description} = req.body;
    const aboutCards = req.body.aboutCards? JSON.parse(req.body.aboutCards)
  : undefined;
    const updateData = {
      title,
      description,
      ...(aboutCards && { aboutCards }),
    };
 const updatedAbout = await about.findOneAndUpdate({},{title,description,aboutCards,
              ...(req.file && {
          image: `/uploads/${req.params.section}/${req.file.filename}`
        })},
        {new:true,runValidators:true});
  
      if (req.file) {
     
      updateData.image = `/uploads/${req.params.section}/${req.file.filename}`;
    }
      if (req.file && existingAbout.image) {
      const oldImagePath = path.join(
        process.cwd(),
        existingAbout.image.replace(/^\/+/, "")
      );

      try {
        await fs.unlink(oldImagePath);
      } catch (error) {
        if (error.code !== "ENOENT") {
          console.error("Failed to delete old image:", error);
        }
      }
    }
  
        
      return res.status(200).json(updatedAbout);
      
    }
    catch(err){
        return next(err);
    }
}
