import { Router } from "express";
import {
    customerRegister,
    customerLogin,
}from "../../customer/login/controller.js"

const router = new Router()

router.post( '/', customerRegister);

router.post( '/login', customerLogin);



export default router