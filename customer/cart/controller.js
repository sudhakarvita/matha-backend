import cartModel from "../../common/cart-model.js";

export const addCart = async (req,res)=>{
    try{
        const Cart = await cartModel.create(req.body)
        res.status(200).json(Cart)
    }catch(error){
        res.status(500).json({error:"add to cart failed"})
    }
};

export const getCartItems = async (req,res)=>{
    try{
        const allCartItems = await cartModel.find()
        res.status(200).json(allCartItems)
    }catch(error){
        res.status(404).json({error:"no cart items"})
    }
};

export const getCartbyId = async (req,res)=>{
    try{
        const CartItem = await cartModel.findById(req.params.id)
        res.status(200).json(CartItem)
    }catch(error){
        res.status(404).json({error:"no cart items found"})
    }
};

