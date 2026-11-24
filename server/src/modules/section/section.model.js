import mongoose from "mongoose";
const sectionSchema = new mongoose.Schema({
    key:{type:String,required:true,unique:true,trim:true,},
    label:{type:String,required:true ,trim:true, minlength:3},
    title:{type:String,required:true ,trim:true, minlength:3},
    description:{type:String,required:true ,trim:true, minlength:10},
    order:{type:Number,required:true},
    isActive:{type:Boolean,required:true,default:true}
})
const Section = mongoose.model("Section",sectionSchema);
export default Section;