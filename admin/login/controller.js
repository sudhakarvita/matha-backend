import adminModel from "../../common/admin-model.js";
import jwt  from "jsonwebtoken";

export const createAdmin = async (req,res)=>{
    try{
        const newAdmin = await adminModel.create(req.body)
        res.status(200).json(newAdmin)
    }catch(error){
        res.status(404).json({error:"failed to create admin"})
    };
};

export const adminLogin = async (req,res)=>{
    try{
        const Admin = await adminModel.findOne(req.body)
        if(!Admin){
            res.status(404).json("admin not found")
        }
        const secretKey = 'my-secretKey';
        const token = jwt.sign({ "password":req.body.password, "mobileno":req.body.mobileno},secretKey,{ expiresIn: '8h' })
        res.status(201).json({Admin,token})
    }catch(error){
        res.status(500).json({error:"admin login failed"})
    };
};



