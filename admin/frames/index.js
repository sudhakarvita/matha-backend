import { Router } from "express";

import{ createFrames,
        getAllframes,
        getframesbyId,
        updateFramebyId,
        deleteFramebyId
 } from "../frames/controller.js"

const router = new Router();

router.post('/', createFrames);

router.get('/getframes', getAllframes);

router.get('/getframe/:id', getframesbyId);

router.put( '/upadate/:id', updateFramebyId);

router.delete( '/delete/:id', deleteFramebyId)

export default router