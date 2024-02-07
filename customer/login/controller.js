import customerModel from "../../common/customer-model.js";
import jwt  from "jsonwebtoken";

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
        const Customer = await customerModel.findOne(req.body)
        if(!Customer){
            res.status(404).json("Customer not found")
        }
        const secretKey = 'my-secretKey';
        const token = jwt.sign({ "mobileno":req.body.mobileno, "password":req.body.password},secretKey,{ expiresIn: '1h' })
        res.status(200).json({Customer,token})
    }catch(error){
        res.status(500).json({error:"Customer login failed"})
    }
};