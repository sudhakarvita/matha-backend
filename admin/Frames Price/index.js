import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ addPrice,
        
        
       
 } from "../Frames Price/controller.js"

const router = new Router();

router.post('/addprice', verifyToken, addPrice);

//  router.get('/getAllthickness', verifyToken, getAllthicknesses);

//  router.get('/getThicknessBy/:id', verifyToken, getThicknessbyId);

//  router.put('/updateThicknessBy/:id', verifyToken, updateThicknessbyId);

//  router.delete('/deleteThicknessBy/:id', verifyToken, deleteThicknessbyId);


export default router