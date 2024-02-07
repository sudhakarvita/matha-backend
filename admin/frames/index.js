import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ createFrames,
        getAllframes,
        getframesbyId,
        updateFramebyId,
        deleteFramebyId
 } from "../frames/controller.js"

const router = new Router();

router.post('/', verifyToken, createFrames);

router.get('/getframes', verifyToken, getAllframes);

router.get('/getframe/:id', verifyToken, getframesbyId);

router.put( '/upadate/:id', verifyToken, updateFramebyId);

router.delete( '/delete/:id', verifyToken, deleteFramebyId)

export default router