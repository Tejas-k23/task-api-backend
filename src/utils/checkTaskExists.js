export function checkTaskExist(tasks, id, res) {
    if (!tasks[id]) {
       
         res.status(404).json({ message: "Task not Found" });
         return false;
    }
    
    return true;
}