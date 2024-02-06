import { Router } from "express";
import {
    customerRegister,
    customerLogin
}from "./controller.js"

const router = new Router()

router.post( '/', customerRegister);

router.post( '/login', customerLogin);



export default router