import framesModel from "../../common/frames-model.js";

export const createFrames = async (req,res)=>{
    try{
        const Frames = await framesModel.create(req.body)
        res.status(200).json(Frames)
    }catch(error){
        res.status(500).json({ error:"failed to create frames"})
    }
};

export const getAllframes = async (req,res)=>{
    try{
        const allFrames = await framesModel.find()
        res.status(200).json(allFrames)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const getframesbyId = async (req,res)=>{
    try{
        const frame = await framesModel.findById(req.params.id)
        res.status(200).json(frame)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const updateFramebyId = async (req,res)=>{
    try{
        const updateFrame = await framesModel.findByIdAndUpdate( req.params.id, req.body, {new:true})
        res.status(200).json(updateFrame)
    }catch(error){
        res.status(500).json({ error:"failed to update frame"})
    }
};

export const deleteFramebyId = async (req,res)=>{
    try{
        const deleteFrame = await framesModel.findByIdAndDelete( req.params.id)
        res.status(200).json(deleteFrame)
    }catch(error){
        res.status(500).json({ error:"failed to delete frame"})
    }
};

