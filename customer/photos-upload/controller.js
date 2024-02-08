import photoModel from "../../common/photos-model.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });
    
  export const fileNum =  upload.single('file')
  
    export const uploadImage =  async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No files uploaded' });
        }
        const data = {
            Imagepath:req.file.originalname
        };
        const image = await photoModel.create(data);
        return res.status(200).json(image);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    };