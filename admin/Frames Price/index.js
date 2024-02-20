import { Router } from "express";
import verifyToken from "../../jwt/verifyToken.js";

import{ addPrice,
        getAllpricesWithIds,
        getPricebyId,
        updatePricebyId,
        deletePricebyId,
        getFrames,
        getAllprices
              
 } from "../Frames Price/controller.js"

const router = new Router();

router.post('/addprice', verifyToken, addPrice);

router.post('/getpricesWithid', verifyToken, getAllpricesWithIds);

router.get('/getframes', verifyToken, getFrames);

router.get('/getPrices', verifyToken, getAllprices);

router.get('/getPriceby/:id', verifyToken, getPricebyId);

router.put('/updatePrice/:id', verifyToken, updatePricebyId);

router.delete('/deletePrice/:id', verifyToken, deletePricebyId);


export default router