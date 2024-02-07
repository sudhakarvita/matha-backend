import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
    Imagepath:{
        type:String  
    },   
},
    {timestamps:true}
)

const photoModel = mongoose.model( "photos", photoSchema)

export default photoModel