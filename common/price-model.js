import mongoose from "mongoose";

const pricesSchema = new mongoose.Schema({
    sizeId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true    
    },
    thicknessId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true    
    },
    price:{
        type:Number,
        require:true    
    },
   
},
    {timestamps:true}
)

const priceModel = mongoose.model( "price", pricesSchema)

export default priceModel