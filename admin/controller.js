import adminModel from "../common/admin-model.js";

export const createAdmin = async (req,res)=>{
    try{
        const newAdmin = await adminModel.create(req.body)
        res.status(200).json(newAdmin)
    }catch(error){
        res.status(404).json({error:"failed to create admin"})
    }
};

export const adminLogin = async (req,res)=>{
    try{
        const Admin = await adminModel.findOne(req.body)
        if(!Admin){
            res.status(404).json("admin not found")
        }
        res.status(200).json(Admin)
    }catch(error){
        res.status(500).json({error:"admin login failed"})
    }
};



