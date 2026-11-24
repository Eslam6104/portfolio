import mongoose from "mongoose";
const heroSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        minlength: 10,
        required: true,
    },
    mediaUrl:{
        type: String,
        required: true,
    },
    mediaType:{
        type: String,
        enum: ['image', 'video'],
        default: 'image',
        required: true,
    }

} , {
    timestamps: true,
  })
  const hero = mongoose.model("Hero", heroSchema);
  export default hero;