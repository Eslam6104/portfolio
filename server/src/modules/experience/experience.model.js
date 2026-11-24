import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    employmentType: {
      type: String,
      enum: ["FULL-TIME", "PART-TIME", "INTERNSHIP", "FREELANCE"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["REMOTE", "ON-SITE", "HYBRID"],
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      default: null,
    },

    isCurrent: {
      type: Boolean,
      default: false,
    },

    description: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const experience = mongoose.model("experience", experienceSchema);

export default experience;