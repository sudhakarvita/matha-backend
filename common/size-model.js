import mongoose from "mongoose";

const sizesSchema = new mongoose.Schema({
    size:{
        type:String,
        require:true    
    },
   
},
    {timestamps:true}
)

const sizesModel = mongoose.model( "size", sizesSchema)

export default sizesModel