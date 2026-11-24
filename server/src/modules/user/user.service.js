import User from "./user.model.js";
//!   get user 
export const getUser = async (req, res, next) => {
    try{
    const user = await User.findOne();

       res.status(200).json(user)
    }
    catch(err){
       next(err);
    }
}
// !update user
export const updateUser = async (req, res, next) => {
    const updateData = req.body;
    try{
            const user = await User.findOneAndUpdate( {},updateData, { new: true, runValidators: true });

        res.status(200).json(user)
    }
    catch(err){
       next(err);
    }
}
// !add
export const addUser = async (req, res, next) => {
   try{
        const user = await User.findOne();
    if(user){
         return res.status(409).json({message:"user already exists"})
    }
    const {email,fullName,workTitle,phone,location,cvUrl,socialLinks}=req.body;

     const newUser= await User.create({
email,fullName,workTitle,phone,location,cvUrl,socialLinks
})
res.status(201).json(newUser)
}catch(err){
   next(err);
   }
}
