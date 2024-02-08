import cartModel from "../../common/cart-model.js";

export const addCart = async (req,res)=>{
    try{
        const Cart = await cartModel.create(req.body)
        res.status(200).json(Cart)
    }catch(error){
        res.status(500).json({error:"add to cart failed"})
    }
};

