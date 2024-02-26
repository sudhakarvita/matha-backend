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
            Imagepath:req.file.filename
        };
        const image = await photoModel(data)
        image.save()
        return res.status(200).json(image)
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    export const viewImages = async (req,res)=>{
      try{
        const Images = await photoModel.find()
        res.status(200).json(Images)
      }catch(error){
        res.status(404).json({error:"images not found"})
      }
    };

    export const viewImagesbyId = async (req,res)=>{
      try{
        const Image = await photoModel.findById(req.params.id)
        res.status(200).json(Image)
      }catch(error){
        res.status(404).json({error:"image not found"})
      }
    };