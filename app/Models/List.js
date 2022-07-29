import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"





export class List{


  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }


  get Template() {
    return `
              <section class="col-4">
                <div class="container">
                  <div class="row shadow">
                    <div class="col-12 rounded-top bg-light" style="border: 8px solid ${this.color};">
                      <h4 class="d-flex justify-content-between align-items-center">${this.name}<span class="fs-1 text-danger selectable" onclick="app.listsController.deleteList('${this.id}')">X</span></h4>
                    </div>
                    <div class="col-12 bg-light">
                      <ul class="list-unstyled my-card-body">
                      ${this.Tasks}
                      </ul>
                    </div>
                    <div class="col-12 bg-light sticky-bottom rounded-bottom d-flex justify-content-center">
                      <form class="row" onsubmit="app.tasksController.createTask('${this.id}')">
                        <label for="name" class="form-label"></label>
                        <input required type="text" class="form-control border-0 bg-light border border-bottom border-dark border-5" name="name" id="name" aria-describedby="emailHelp"
                        placeholder="New List...">
                        <button type="submit" class="mb-1 btn selectable ">Add</button>
                      </form>
                    </div>
                </div>
              </section>
    `
  }


  get Tasks() {
    let template = ''
      let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
    tasks.forEach(task => template += task.Template)
    if(template){
      return template
    } else {
      return '<li>Add task to new list below</li>'
    }
  }

}