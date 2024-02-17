import cartModel from "../../common/cart-model.js";
import checkoutModel from "../../common/checkout-model.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });
    
  export const fileNum =  upload.single('file')
  
    export const addCartItems =  async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No files uploaded' });
        }
        const data = {
            cartId:req.body.cartId,
            thickness:req.body.thickness,
            size:req.body.size,
            date:req.body.date,
            price:req.body.price,            
            photo:req.file.filename
        };
        const image = await cartModel.create(data);
        return res.status(200).json(image);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
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
        const CartItem = await cartModel.find({"cartId":req.params.id})
        res.status(200).json(CartItem)
    }catch(error){
        res.status(404).json({error:"no cart items found"})
    }
};

export const getCartbyid = async (req,res)=>{
    try{
        const Frames = await cartModel.aggregate([
            {
                $match: { "cartId":req.params.id }
            },

            {
                $lookup: {
                    from: 'carts',
                    localField: 'cartId',
                    foreignField: '_id',
                    as: 'cart_details'
                },
                
            },
            {
                $lookup: {
                    from: 'sizes',
                    localField: 'sizeId',
                    foreignField: '_id',
                    as: 'sizes_details'
                },
                
            },
            {
                $lookup: {
                    from: 'thicknes',
                    localField: 'thicknessId',
                    foreignField: '_id',
                    as: 'thicknes_details'
                },
                
            }
        ])
        res.status(200).json(Frames)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const updateCartItems = async (req,res)=>{
    try{
        const updateCart = await cartModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updateCart)
    }catch(error){
        res.status(500).json({error:"cart update failed"})
    }
};

export const deleteCartItems = async (req,res)=>{
    try{
        const deleteCart = await cartModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteCart)
    }catch(error){
        res.status(500).json({error:"cart delete failed"})
    }
};

//checkout api's

export const addCheckout = async (req,res)=>{
    try{
        const newCheckout = await checkoutModel.create(req.body)
        res.status(200).json(newCheckout)
    }catch(error){
        res.status(500).json({error:"failed to create checkout"})
    }
};

export const viewCheckout = async (req,res)=>{
    try{
        const checkout = await checkoutModel.find()
        res.status(200).json(checkout)
    }catch(error){
        res.status(404).json({error:"checkout details not found"})
    }
};

export const viewCheckoutbyId = async (req,res)=>{
    try{
        const checkout = await checkoutModel.findById(req.params.id)
        res.status(200).json(checkout)
    }catch(error){
        res.status(404).json({error:"checkout details not found"})
    }
};

export const updateCheckout = async (req,res)=>{
    try{
        const updatecheckout = await checkoutModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatecheckout)
    }catch(error){
        res.status(500).json({error:"failed to update checkout"})
    }
};

export const deleteCheckout = async (req,res)=>{
    try{
        const deletecheckout = await checkoutModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletecheckout)
    }catch(error){
        res.status(500).json({error:"failed to delete checkout"})
    }
};


