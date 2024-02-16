import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ addPrice,
        getAllprices,
        getPricebyId,
        updatePricebyId,
        deletePricebyId,
        getFrames
              
 } from "../Frames Price/controller.js"

const router = new Router();

router.post('/addprice', verifyToken, addPrice);

router.post('/getprices', verifyToken, getAllprices);

router.get('/getframes', verifyToken, getFrames);

router.get('/getPriceby/:id', verifyToken, getPricebyId);

router.put('/updatePrice/:id', verifyToken, updatePricebyId);

router.delete('/deletePrice/:id', verifyToken, deletePricebyId);


export default router