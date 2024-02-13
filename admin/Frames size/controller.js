import sizesModel from "../../common/size-model.js";

export const addSizes = async (req,res)=>{
    try{
        const Sizes = await sizesModel.create(req.body)
        res.status(200).json(Sizes)
    }catch(error){
        res.status(500).json({ error:"failed to create sizes"})
    }
};

export const getAllsizes = async (req,res)=>{
    try{
        const allsizes = await sizesModel.find()
        res.status(200).json(allsizes)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const getsizebyId = async (req,res)=>{
    try{
        const size = await sizesModel.findById(req.params.id)
        res.status(200).json(size)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const updateSizebyId = async (req,res)=>{
    try{
        const updateSize = await sizesModel.findByIdAndUpdate( req.params.id, req.body, {new:true})
        res.status(200).json(updateSize)
    }catch(error){
        res.status(500).json({ error:"failed to update size"})
    }
};

export const deleteSizebyId = async (req,res)=>{
    try{
        const deleteSize = await sizesModel.findByIdAndDelete( req.params.id)
        res.status(200).json(deleteSize)
    }catch(error){
        res.status(500).json({ error:"failed to delete size"})
    }
};

