import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ addThickness,
        getAllthicknesses,
        getThicknessbyId,
        updateThicknessbyId,
        deleteThicknessbyId
        
       
 } from "../Frames thickness/controller.js"

const router = new Router();

router.post('/addthickness', verifyToken, addThickness);

 router.get('/getAllthickness', verifyToken, getAllthicknesses);

 router.get('/getThicknessBy/:id', verifyToken, getThicknessbyId);

 router.put('/updateThicknessBy/:id', verifyToken, updateThicknessbyId);

 router.delete('/deleteThicknessBy/:id', verifyToken, deleteThicknessbyId);


export default router