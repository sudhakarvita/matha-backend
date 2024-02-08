import { Router } from "express";
import {
    customerRegister,
    customerLogin,
    getAllCustomers,
    getCustomerById,
    updateCustomerbyId,
    deleteCustomerbyId,
}from "../../customer/login/controller.js"
import verifyToken from "../../jwt/verifyToken.js";

const router = new Router()

router.post( '/', customerRegister);

router.post( '/login', customerLogin);

router.get( '/getAllcustomer', verifyToken, getAllCustomers);

router.get( '/getcustomerById/:id', verifyToken, getCustomerById);

router.put( '/update/:id', verifyToken, updateCustomerbyId);

router.delete( '/delete/:id', verifyToken, deleteCustomerbyId);




export default router