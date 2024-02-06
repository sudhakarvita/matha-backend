import { Router } from "express";
import { createAdmin,
         adminLogin
 } from "../login/controller.js";

const router = new Router()

router.post('/',createAdmin)

router.post('/login',adminLogin)


export default router