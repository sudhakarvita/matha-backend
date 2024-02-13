import mongoose from "mongoose";

const pricesSchema = new mongoose.Schema({
    sizeId:{
        type:String,
        require:true    
    },
    thicknessId:{
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

const priceModel = mongoose.model( "price", pricesSchema)

export default priceModel