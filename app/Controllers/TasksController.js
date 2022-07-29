import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

  function test() {
    console.log('test from task controller');
    tasksService.test()
  }




export class TasksController{

  constructor() {
   test()
  }
  

    createTask(listId) {
      window.event.preventDefault()
      let form = window.event.target

      let newTask = {
        name: form.name.value,
        listId: listId
      }
      console.log('new task', newTask);
      tasksService.createTask(newTask)
      
  }
  
   async deleteTask(id) {
    if (await Pop.confirm()) {
      tasksService.deleteTask(id)
    }
  }
}