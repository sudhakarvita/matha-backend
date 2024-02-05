import customerModel from "../common/customer-model.js";

export const customerRegister = async (req,res)=>{
    try{
        const newCustomer = await customerModel.create(req.body)
        res.status(200).json(newCustomer)
    }catch(error){
        res.status(500).json({error:'customer registration failed'})
    }
};

export const customerLogin = async (req,res)=>{
    try{
        const Customer = await customerModel.findOne({"mobileno":req.body.mobileno, "password":req.body.password})
        res.status(200).json(Customer)
    }catch(error){
        res.status(500).json({error:"Customer login failed"})
    }
}