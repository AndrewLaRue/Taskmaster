import { tasksService } from "../Services/TasksService.js";


  function test() {
    console.log('test from task controller');
    tasksService.test()
  }


export class TasksController{

  constructor() {
   test()
 }
}