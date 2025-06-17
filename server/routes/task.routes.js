import { Router } from "express";
import { deleteTask, getAllTask, getTaskById, postTask, updateTask } from "../controller/task.controller.js";
const taskRouter=Router();

taskRouter.get("/tasks",getAllTask);
taskRouter.post("/tasks",postTask);
taskRouter.get("/tasks/:id",getTaskById);
taskRouter.put("/tasks/:id",updateTask);
taskRouter.delete("/tasks/:id",deleteTask);

export default taskRouter;