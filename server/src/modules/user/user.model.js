import mongoose from "mongoose";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userSchema = new mongoose.Schema({
fullName:{
    minlength:6,
    type:String,
    required:true,
    trim:true
},
workTitle:{
    type:String,
    minlength:6,
    required:true,
    trim:true
},
phone:{
    minlength:11,
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true,
    match:emailRegex
},
location:{
    type:String,
    required:true,
    trim:true
},
cvUrl:{
          type: String,
      trim: true,
      required:true
},
socialLinks:[{
    platform:{
                type: String,
                required: true,},
    url:{
        type: String,
          required: true,},
}]
},{timestamps:true})

const User= mongoose.model("User",userSchema);
export default User;

