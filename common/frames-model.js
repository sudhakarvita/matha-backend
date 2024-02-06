import mongoose from "mongoose";

const framesSchema = new mongoose.Schema({
    size:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    thickness:{
        type:String,
        require:true
    },
},
    {timestamps:true}
)

const framesModel = mongoose.model( "frame", framesSchema)

export default framesModel