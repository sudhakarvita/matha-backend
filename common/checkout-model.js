import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobileno:{
        type:Number,
        require:true
    },
    houseno:{
        type:String,
        require:true
    },
    landmark:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },

},
    {timestamps:true}
)

const checkoutModel = mongoose.model( "checkout", checkoutSchema);

export default checkoutModel