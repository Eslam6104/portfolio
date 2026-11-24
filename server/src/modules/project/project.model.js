import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    iconUrl:{
    type:String,
    required:true,
    trim:true
    },
  title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
   description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
       technologies: [

      {
        type: String,
        trim: true,
      },
    ],
    liveUrl: {
      type: String,
      trim: true,
      required: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },order: {
  type: Number,
  default: 0,
  min: 0
},
  },{timestamps:true
})
const project = mongoose.model("Project", projectSchema);
export default project;