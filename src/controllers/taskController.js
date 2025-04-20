const Task = require("../models/Task")

const getTasks=async(req,res)=>{
    try{
        const tasks=await Task.find();
        res.json({
            ok:true,
            tasks:tasks,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        });
    }
};

const getTaskById=async(req,res)=>{
    const { taskId } = req.params;
    try{
        const task=await Task.findById(taskId);
        if(!task)return res.status(404).json({message:"error finding the task"});
        res.json({
            ok:true,
            task:task,
            msg:"task found"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        });
    }
};

const updateSprint=async(req,res)=>{

    const { sprintId } = req.params;
    
    try{
        const sprint=await Sprint.findByIdAndUpdate(sprintId,req.body);
        
        if(!sprint)return res.status(404).json({message:"error finding the sprint"});
        
        res.json({
            ok:true,
            sprint:req.body,
            msg:"sprint edited with success"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        });
    }
};

const deleteSprint=async(req,res)=>{

    const { sprintId } = req.params;
    
    try{
        const sprint=await Sprint.findByIdAndDelete(sprintId);
        
        if(!sprint)return res.status(404).json({message:"error finding the sprint"});
        
        res.json({
            ok:true,
            sprint:req.body,
            msg:"sprint edited with success"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        });
    }
};

module.exports={getTasks,getTaskById,}
