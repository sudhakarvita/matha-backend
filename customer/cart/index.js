import { Router } from "express";
import { addCart,
} from "../../customer/cart/controller.js"

const router = new Router()

router.post('/', addCart)

export default router