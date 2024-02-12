import { Router } from "express";
import {
         getCartItems,
         getCartbyId,
         updateCartItems,
         deleteCartItems,
         fileNum,
         addCartItems,
         addCheckout,
         viewCheckout,
         viewCheckoutbyId,
         updateCheckout,
         deleteCheckout,
         
} from "../../customer/cart/controller.js"
import verifyToken from "../../jwt/verifyToken.js";

const router = new Router()

router.post('/', verifyToken, fileNum, addCartItems);

router.get('/getcart', verifyToken, getCartItems);

router.get('/getcartBy/:id', verifyToken, getCartbyId);

router.put( '/updatecart/:id', verifyToken, updateCartItems);

router.delete( '/deletecart/:id', verifyToken, deleteCartItems);


//checkout api's

router.post('/addcheckout', verifyToken, addCheckout);

router.get('/viewcheckout', verifyToken, viewCheckout);

router.get('/viewCheckoutbyId/:id', verifyToken, viewCheckoutbyId);

router.put('/updateCheckout/:id', verifyToken, updateCheckout);

router.delete('/deleteCheckout/:id', verifyToken, deleteCheckout)

export default router