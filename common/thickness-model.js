import mongoose from "mongoose";

const thicknessSchema = new mongoose.Schema({
    thickness:{
        type:String,
        require:true    
    },
   
},
    {timestamps:true}
)

const thicknessModel = mongoose.model( "thicknes", thicknessSchema)

export default thicknessModel