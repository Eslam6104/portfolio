import {getAbout,addAbout,updateAbout} from './about.service.js';
import express from 'express';
import upload from '../../middlewares/upload.middleware.js';
const aboutRouter = express.Router();
aboutRouter.get('/',getAbout)
aboutRouter.post("/:section", upload.single("image"), addAbout);
aboutRouter.put("/:section", upload.single("image"), updateAbout);
export default aboutRouter;