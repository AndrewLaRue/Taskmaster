import { generateId } from "../Utils/generateId.js";




export class Task{


  constructor(data) {
    this.id = data.id || generateId(),
    this.name = data.name
    this.listId = data.listId

  }
// TODO check box needs finished
  get Template() {
    return `
      <li class="d-flex justify-content-between"><input type="checkbox" class="selectable" name="" id="">${this.name} <span onclick="app.tasksController.deleteTask('${this.id}')" class="selectable text-danger">X</span> </li>
    `
  }
}