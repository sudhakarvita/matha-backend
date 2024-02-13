import mongoose from "mongoose";

const framesSchema = new mongoose.Schema({
    size:{
        type:String,    
    },
    price:{
        type:String, 
    },
    thickness:{
        type:String,  
    },
},
    {timestamps:true}
)

const framesModel = mongoose.model( "frame", framesSchema)

export default framesModel