import mongoose from "mongoose";
import { DATABASE_URL } from "../config/env.js";

const URL= DATABASE_URL;
if(!URL){
    console.log("Checking for the Database URL: ",URL);
    throw new Error("Please Provide the Database URL")
}

const connectToDb= async(req,res)=>{
    try {
        await  mongoose.connect(URL);
        console.log("Connected to The Database")
    } catch (error) {
        console.log("Some Error Occured: ",error);
        process.exit(1);
    }
}

export default connectToDb;