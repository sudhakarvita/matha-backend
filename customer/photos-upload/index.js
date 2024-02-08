import { Router } from "express";
import{ uploadImage,
        fileNum
    
} from "../../customer/photos-upload/controller.js";
import verifyToken from "../../jwt/verifyToken.js";


const router = new Router();

router.post('/upload', verifyToken,  fileNum, uploadImage)

export default router