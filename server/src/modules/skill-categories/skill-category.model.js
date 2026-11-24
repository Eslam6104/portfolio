import mongoose from "mongoose";

const skillCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    iconUrl: {
      type: String,
      trim: true,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
      min: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const skillCategory = mongoose.model(
  "skillCategory",
  skillCategorySchema
);

export default skillCategory;