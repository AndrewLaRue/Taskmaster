import { ProxyState } from "../AppState.js";
import { ListsController } from "../Controllers/ListsController.js";
import { List } from "../Models/List.js";



class ListsService{
  createList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList)]
    console.log(newList);
  }

  test() {
    
  console.log('test from list service');
}


}

export const listsService = new ListsService()