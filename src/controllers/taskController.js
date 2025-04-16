const { default: Task } = require("../models/Task")

const createTask=async(req,res=response)=>{
    
    const {title,description,state,deadLine}=req.body()

    try{
        let task = new Task(req.body);
        await task.save();
        return res.status(201).json({
            ok:true,
            msg:"task added",
            
        })
    }

}   