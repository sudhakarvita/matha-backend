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
        const Customer = await customerModel.findOne({"mobileno":req.body.mobileno, "password":req.body.password})
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

export const getAllCustomers = async (req,res)=>{
    try{
        const allCustomers = await customerModel.find()
        res.status(200).json(allCustomers)
    }catch(error){
        res.status(404).json({error:" customers not found"})
    }
};

export const getCustomerById = async (req,res)=>{
    try{
        const customer = await customerModel.findById(req.params.id)
        res.status(200).json(customer)
    }catch(error){
        res.status(404).json({error:" customer not found"})
    }
};

export const updateCustomerbyId = async (req,res)=>{
    try{
        const updateCustomer = await customerModel.findByIdAndUpdate( req.params.id, req.body, {new:true})
        res.status(200).json(updateCustomer)
    }catch(error){
        res.status(500).json({ error:"failed to update customer"})
    }
};

export const deleteCustomerbyId = async (req,res)=>{
    try{
        const deleteCustomer = await customerModel.findByIdAndDelete( req.params.id)
        res.status(200).json(deleteCustomer)
    }catch(error){
        res.status(500).json({ error:"failed to delete customer"})
    }
};

