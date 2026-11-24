import express from "express";

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./skill-category.service.js";

const SkillCategoryRouter = express.Router();

SkillCategoryRouter.get("/", getAllCategories);
SkillCategoryRouter.get("/:id", getCategoryById);
SkillCategoryRouter.post("/", createCategory);
SkillCategoryRouter.put("/:id", updateCategory);
SkillCategoryRouter.delete("/:id", deleteCategory);

export default SkillCategoryRouter;