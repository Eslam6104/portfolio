import hero from "./hero.model.js";
export const getHero= async(req,res,next)=>{
    try{
        const heroData= await hero.findOne();
        return res.status(200).json(heroData)
    }
    catch(err){
       return next(err);
    }
}
export const updateHero= async(req,res,next)=>{
    try{
        const {title,description,mediaUrl,mediaType}=req.body;
        const updateHero = await hero.findOneAndUpdate({},{
            title,
            description,
            mediaUrl,
            mediaType
        }, {new: true})
      return  res.status(200).json(updateHero)
    }
    catch(err){
       return next(err);
    }
}
export const addHero= async(req,res,next)=>{
    try{
        const existingHero = await hero.findOne();
        if(existingHero){
            return res.status(400).json({message:"Hero already exists. Please update instead."})
        }
        const {title,description,mediaUrl,mediaType}=req.body;
        const newHero = await hero.create({
            title,description,mediaUrl,mediaType
        })
         return res.status(201).json(newHero)
    }
    catch(err){
       return next(err);
    }
}