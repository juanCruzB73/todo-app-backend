import mongoose from "mongoose";

const sprintSchema=mongoose.Schema({
    beginLine:String,
    deadLine:String,
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "task"
    }]
})
export default mongoose.model("sprint",sprintSchema);