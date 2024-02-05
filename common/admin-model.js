import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    mobileno:{
        type:Number,
        require:true
    }
},
    {timestamps:true}
)

const adminModel = mongoose.model( "admin", adminSchema)

export default adminModel