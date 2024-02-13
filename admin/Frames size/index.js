import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ addSizes,
        getAllsizes,
        getsizebyId,
        updateSizebyId,
        deleteSizebyId
       
 } from "../Frames size/controller.js"

const router = new Router();

router.post('/addsize', verifyToken, addSizes);

router.get('/getsizes', verifyToken, getAllsizes,);

router.get('/getsizeBy/:id', verifyToken, getsizebyId,);

router.put('/updatesizeBy/:id', verifyToken, updateSizebyId);

router.delete('/deletesizeBy/:id', verifyToken, deleteSizebyId);


export default router