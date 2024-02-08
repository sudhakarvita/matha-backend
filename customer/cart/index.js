import { Router } from "express";
import { addCart,
         getCartItems,
         getCartbyId,
} from "../../customer/cart/controller.js"
import verifyToken from "../../jwt/verifyToken.js";

const router = new Router()

router.post('/', verifyToken, addCart)

router.get('/getcart', verifyToken, getCartItems)

router.get('/getcartBy/:id', getCartbyId)

export default router