
/*
 * Page | Home
 */

import { IRouteHandler } from "../engine/routeDispatcher";
import { loadCSS, loadEngineCSS } from "../engine/core";
 

export class HomePage implements IRouteHandler {

//  modelDropdown: WebflowDropdown; 

  constructor() {
  }
  setup() {

//    loadEngineCSS("site.css"); 
   
  }

  exec() {  

    console.log("Home."); 

  }

}
