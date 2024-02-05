import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobileno:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },

},
    {timestamps:true}
)

const customerModel = mongoose.model( "customer", customerSchema);

export default customerModel