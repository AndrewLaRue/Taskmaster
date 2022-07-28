import { listsService } from "../Services/ListsService.js";


  function test() {
    console.log('test from list controller');
    listsService.test()
  }

export class ListsController {

  constructor() {
    test()
  }

}