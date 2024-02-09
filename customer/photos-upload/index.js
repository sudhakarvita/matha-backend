import { Router } from "express";
import{ uploadImage,
        fileNum,
        viewImages,
        viewImagesbyId
    
} from "../../customer/photos-upload/controller.js";
import verifyToken from "../../jwt/verifyToken.js";


const router = new Router();

router.post('/upload', verifyToken,  fileNum, uploadImage);

router.get('/getImages', verifyToken, viewImages)

router.get('/getImagebyId/:id', verifyToken, viewImagesbyId)

export default router