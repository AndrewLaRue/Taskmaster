import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  
  /** @type {import('./Models/List').List[]} */

    lists = [
      new List({
        id: 25,
        name: 'Chores',
        color: '#6b4406'
      })
    ]


  /** @type {import('./Models/Task').Task[]} */
  tasks = [

    new Task({
      id: 50,
      name: 'Walk the dog.',
      listId: 25
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
