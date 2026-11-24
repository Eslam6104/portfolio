import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import cors from "cors";
import userRouter from "./src/modules/user/user.routes.js";
import heroRouter from "./src/modules/hero/hero.routes.js";
import sectionRouter from "./src/modules/section/section.routes.js";
import aboutRouter from "./src/modules/about/about.routes.js";
import projectRouter from "./src/modules/project/project.routes.js";
import experienceRouter from "./src/modules/experience/experience.routes.js";
import skillCategoryRouter from "./src/modules/skill-categories/skill-category.routes.js";
import skillRouter from "./src/modules/skills/skill.routes.js";
dotenv.config();
const port = process.env.PORT || 3000;
// ! create express app with cors enabled
// ?cors is a middleware that allows cross-origin requests from different domains. 
// ?It is used to enable communication between the frontend and backend of a web application that are hosted on different domains or ports.
const app =express();
app.use(cors({ origin: "localhost:3000" }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/hero", heroRouter);
app.use("/section", sectionRouter);
app.use("/about", aboutRouter);
app.use("/project", projectRouter);
app.use("/experience", experienceRouter);
app.use("/skill", skillRouter);
app.use("/skillCategory", skillCategoryRouter);
app.get("/",(req,res)=>{
    res.send("portfolio backend is running")
}) 
// ! error handling middleware
app.use(errorMiddleware);
// ! START SERVER
const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};
startServer()