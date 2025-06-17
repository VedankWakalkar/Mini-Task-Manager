import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Running"
    })
})


app.use("/api/v1/",taskRouter);


export default app;
