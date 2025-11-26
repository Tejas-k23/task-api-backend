import tasks from "../data/taskDB.js";
import { validateTaskData } from "../validation/taskValidation.js";
import {v4 as uuidv4} from "uuid";

import { checkTaskExist } from "../utils/checkTaskExists.js";

function getAllTasks(req,res){
    return res.json(Object.values(tasks))
};

function getTaskById(req,res){
    const {id}=req.params;
    if(!checkTaskExist(tasks,id,res))return;
    
         return res.json((tasks[id]));
};


function createTask(req,res){
 

   const validation=validateTaskData(req.body);

    if (!validation.isValid) {
    return res.status(validation.status).json({
      errors: validation.errors,
    });}
   const id =uuidv4();
    const newTask={
        id,
         title:req.body.title,
         description: req.body.description,
        status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
tasks[id] = newTask;

  return res.status(201).json(newTask);

}



function updateTask(req,res){
  const {id}=req.params;
  if(!checkTaskExist(tasks,id,res))return;

   const validation=validateTaskData(req.body);

    if (!validation.isValid) {
    return res.status(validation.status).json({
      errors: validation.errors,
    });}

    const updateTask={
        ...tasks[id],
         title:req.body.title,
         description: req.body.description,
         status: req.body.status || tasks[id].status,
         updatedAt: new Date(),
    }
    tasks[id]=updateTask
      return res.status(200).json(updatedTask);
}

function deleteTask(req,res){
     const {id}=req.params;
  if(!checkTaskExist(tasks,id,res))return;
  
    delete tasks[id];

  return res.json({ message: "Task deleted successfully" });

}
export default { 
    deleteTask, 
    createTask, 
    updateTask, 
    getAllTasks, 
    getTaskById 
};