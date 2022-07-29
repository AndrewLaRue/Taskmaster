import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { List } from "../Models/List.js";




export function saveState(){
  console.log('saving');
  let data = {
    tasks : ProxyState.tasks,
    lists: ProxyState.lists
  }
  localStorage.setItem('TaskMaster', JSON.stringify(data))

}

export function loadState(){
  console.log('loading');
  
  let rawData = localStorage.getItem('TaskMaster')
  if(rawData){
    let data = JSON.parse(rawData)
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.tasks = data.tasks.map(task => new Task(task))
  }
  


}