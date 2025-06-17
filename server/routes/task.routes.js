import { Router } from "express";
const taskRouter=Router();

taskRouter.get("/tasks",getAllTask);
taskRouter.post("/tasks",postTask);
taskRouter.get("/tasks/:id",getTaskById);
taskRouter.put("/tasks/:id",updateTask);
taskRouter.delete("/tasks/:id",deleteTask);

export default taskRouter;