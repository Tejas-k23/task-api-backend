import express from "express";
const taskRoutes = express.Router();
import TaskController from "../controllers/taskControllers.js";

taskRoutes.route("/")

    .get(TaskController.getAllTasks) 
    .post(TaskController.createTask);

taskRoutes.route("/:id")
    .get(TaskController.getTaskById)
    .put(TaskController.updateTask)
    .delete(TaskController.deleteTask);

export default taskRoutes;