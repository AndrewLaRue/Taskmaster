import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


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
    // test()
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

}