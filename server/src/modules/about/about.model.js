import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    title: {
        trim: true,
        type: String,
        required: true,
        minlength: 5
    },
    description: {
        trim: true,
        type: String,
        required: true,
        minlength: 10
    },
    aboutCards: [{
        title: {
            trim: true,
            type: String,
            required: true,
            minlength: 5
        },
        description: {
            trim: true,
            type: String,
            required: true,
            minlength: 5
        }
    }],
    image: {
  type: String,
  required: true,
}
},
  {
    timestamps: true,
  })
  const about = mongoose.model('about', aboutSchema);
  export default about;