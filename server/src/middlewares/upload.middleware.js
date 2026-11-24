import multer from "multer";
import path from "path";
import fs from "fs";
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
  const section = req.baseUrl.split("/").pop();

  const uploadPath = path.join("uploads", section);

  fs.mkdirSync(uploadPath, { recursive: true });
        if (!fs.existsSync(`uploads/${section}`)) {
            fs.mkdirSync(`uploads/${section}`, { recursive: true });
        }
        cb(null,`uploads/${section}`);
      
    },
    filename: function (req,file,cb) {
      const uniqueName= Date.now()+path.extname(file.originalname);
      cb(null,uniqueName);
    }
})
const filterFile= function (req,file,cb) {
if (file.mimetype.startsWith("image/")) {
    cb(null,true);
}
else{
    cb(new Error("Only image files are allowed!"),false);
}
}
const upload = multer({storage, fileFilter: filterFile ,limits: {
    fileSize: 5 * 1024 * 1024,
  },})

  export default upload;