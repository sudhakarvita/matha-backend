import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    thicknessId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    sizeId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    quantity:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
},
    {timestamps:true}
)

const cartModel = mongoose.model( "cart", cartSchema)

export default cartModel