/*
 * Index  
 * Main entry point
 * 
 */

import { HomePage } from "./page/home";
import { RouteDispatcher } from "./routeDispatcher";
import { Site } from "./site";

// Global vars
const SITE_NAME = 'Site';
const VERSION = 'v0.1.1';



// Global object
window[SITE_NAME] = window[SITE_NAME] || {}; 
var SiteData = window[SITE_NAME];

declare global {
    interface Window {

    // Extend the Window interface to include fsAttributes
    fsAttributes: [string, (filterInstances: any[]) => void][];

    //   modelsDataSourceElems: NodeListOf<HTMLElement>;
    //   modelsSelectElem: HTMLElement | null;
    //   modelsNavElem: HTMLElement | null;
    }
}



const init = () => {
    
    console.log(`${SITE_NAME} package init ${VERSION}`);

    (new Site()).init();

    var routeDispatcher = new RouteDispatcher();
    routeDispatcher.routes = {
        '/': () => {

            (new HomePage()).init();

        }
    };
    routeDispatcher.dispatchRoute(); 
}

/**
 * Initialize
 */ 

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}
