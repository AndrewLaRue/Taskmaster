import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

  function test() {
    console.log('test from list controller');
    listsService.test()
}
  

function _drawList() {
  let template = ''
  let lists = ProxyState.lists

  lists.forEach(l => template += l.Template);
  
  // @ts-ignore
  document.getElementById('listCard').innerHTML = template
  }

export class ListsController {

  constructor() {

    ProxyState.on('lists', _drawList)
    ProxyState.on('tasks', _drawList)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    // test()
    loadState()
    _drawList()
  }

  createList() {
    window.event.preventDefault()
    
    let form = window.event.target
    console.log('form', form);

    let newList = {
      name: form.name.value,
      color:form.color.value
    }

    listsService.createList(newList)
    console.log(newList);
    form.reset()
  }


 async deleteList(id) {
    if (await Pop.confirm()) {
      listsService.deleteList(id)
    }
  }
}