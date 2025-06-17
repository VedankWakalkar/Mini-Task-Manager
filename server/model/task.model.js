import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        enum:["Pending","Done"],
        default:"Pending",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

const Task = mongoose.model("Task",taskSchema);

export default Task;