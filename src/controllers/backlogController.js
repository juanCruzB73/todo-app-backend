const Backlog = require("../models/Backlog");
const Task = require("../models/Task");

const getBacklogTask=async(req,res)=>{
    try{
        const backlog = await Backlog.find();
        res.json({
        ok:true,
        backlog:backlog,
    });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"internal error"
        });
    };
}

const addTaskBacklog=async(req,res)=>{
    let backlog = await Backlog.findOne().populate("tasks");
    if (!backlog) {
        backlog = new Backlog({ tasks: [] });
        await backlog.save();
    }
    console.log(backlog);
    try{
        const task = new Task(req.body);
        await task.save();
        backlog.tasks.push(task);
        await backlog.save();
        res.json({
            ok:true,
            msg:"Task saved on Backlog",
            newTask:task,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"Internal error"
        })
    }
}

module.exports={getBacklogTask,addTaskBacklog,}