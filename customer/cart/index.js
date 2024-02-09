import { Router } from "express";
import { addCart,
         getCartItems,
         getCartbyId,
         updateCartItems,
         deleteCartItems
} from "../../customer/cart/controller.js"
import verifyToken from "../../jwt/verifyToken.js";

const router = new Router()

router.post('/', verifyToken, addCart);

router.get('/getcart', verifyToken, getCartItems);

router.get('/getcartBy/:id', verifyToken, getCartbyId);

router.put( '/updatecart/:id', verifyToken, updateCartItems)

router.delete( '/deletecart/:id', verifyToken, deleteCartItems)

export default router