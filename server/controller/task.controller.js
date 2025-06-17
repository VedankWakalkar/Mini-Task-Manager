import Task from "../model/task.model.js"
import mongoose from "mongoose";

export const getAllTask=async(req,res)=>{
    try {
        const tasks= await Task.find();
        return res.status(200).json({
            success:true,
            message:"All Task Retrived!",
            Tasks:tasks
        })
    } catch (error) {
        console.log("Some Error Occured: ",error);
        res.status(500).json({
            message:error.message
        })
    }
}

export const getTaskById=async(req,res)=>{
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success:false,
            message:"Invalid ID"
        })
    }
    try {
        const isTaskExists= await Task.findById(id);
        if(!isTaskExists){
            return res.status(404).json({
                success:false,
                message:`Task with this is id:${id} does not exist.`
            })
        }
        res.status(200).json({
            success:true,
            message:`Task found with this Id :${id}`,
            Task:isTaskExists
        })
    } catch (error) {
        console.log("Some Error Occured: ",error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const postTask= async(req,res)=>{
    try {
        const {title, status} = req.body;
        const isTaskExists=await Task.findOne({title});
        if(isTaskExists){
            return res.status(409).json({
                message:'Task with this Title already exists.'
            })
        }
        const newTask = await Task.create({title,status});
        res.status(200).json({
            success:true,
            message:"Task Created Successfully.",
            data:{
                newTask
            }
        })
    } catch (error) {
        console.log("Some Error Occured: ",error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const updateTask=async(req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success:false,
            message:"Invalid ID"
        })
    }
    try {
        
        const isTaskExists= await Task.findById(id);
        if(!isTaskExists){
            return res.status(403).json({
                success:false,
                message:`Task with this id:${id} not found`
            })
        }
        const updatedTask= await Task.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        })

        res.status(200).json({
            success:true,
            message:"Task Updated Successfully",
            updatedTask:updatedTask
        })

    } catch (error) {
        console.log("Some Error Occured: ",error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const deleteTask= async(req,res)=>{
    const id=req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID"
    });
  }
    try {
        const deletedTask= await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({
            success: false,
            message: `Task with ID ${id} not found`
            });
        }
        res.status(200).json({
            message:"Task Successfully Deleted.",
        })
    } catch (error) {
        console.log("Some Error Occured: ",error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}