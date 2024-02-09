import { Router } from "express";
import {
         getCartItems,
         getCartbyId,
         updateCartItems,
         deleteCartItems,
         fileNum,
         addCartItems,
         addCheckout,
         
} from "../../customer/cart/controller.js"
import verifyToken from "../../jwt/verifyToken.js";

const router = new Router()

router.post('/', verifyToken, fileNum, addCartItems);

router.get('/getcart', verifyToken, getCartItems);

router.get('/getcartBy/:id', verifyToken, getCartbyId);

router.put( '/updatecart/:id', verifyToken, updateCartItems);

router.delete( '/deletecart/:id', verifyToken, deleteCartItems);

//checkout api's

router.post('/addcheckout', verifyToken, addCheckout)

export default router