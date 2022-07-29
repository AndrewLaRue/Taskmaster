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
              <section class="row bg-light elevation-2 rounded my-card align-items-between">
                <div class="col-12" style="background-color: ${this.color};">
                  <h4>${this.name}</h4>
                </div>
                <div class="col-12">
                <ul class="list-unstyled">
                  <li>${this.TemplateTasks}</li>
                </ul>
                </div>
                <div class="col-12">
                  ADD TASK ROW
                </div>
              </section>
    `
  }


  get TemplateTasks() {
    let template = ''
    ProxyState.tasks.filter(t => t.listId == this.id).forEach(t => template += t.Template)
      
    return template
  }

}