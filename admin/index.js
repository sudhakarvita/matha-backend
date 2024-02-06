import { Router } from "express";
import { createAdmin,
         adminLogin
 } from "../admin/controller.js";

const router = new Router()

router.post('/',createAdmin)

router.post('/login',adminLogin)


export default router