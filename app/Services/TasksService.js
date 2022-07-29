import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";



class TasksService{
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

    createTask(newTask) {
      ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
      console.log(ProxyState.tasks);
    }
    

  test() {
console.log('test from task service');
  }



}


export const tasksService = new TasksService()