/*
 * Index  
 * Main entry point
 * 
 */

import { VERSION } from "./version";
import { routeDispatcher } from "./routes";
import { initSSE } from "@sygnal/sse"; 

interface SiteGlobalDataType {
    // Define properties and their types for SiteDataType
    // For example:
    // someProperty?: string;
    // anotherProperty?: number;
    // Add other properties as needed
} 

// Global vars
const SITE_NAME = 'Site';



// Global object
// window[SITE_NAME] = window[SITE_NAME] || {}; 
// var SiteData = window[SITE_NAME];

declare global {
    interface Window {

        // fsAttributes
        fsAttributes: [string, (filterInstances: any[]) => void][];

        // Site global data
        Site: SiteGlobalDataType;

    }
}

// Init SSE Engine
initSSE();

// Perform setup, sync
const setup = () => {
    
    console.log(`${SITE_NAME} package init v${VERSION}`);
    
    routeDispatcher().setupRoute(); 

}

// Perform exec, async
// After DOM content loaded 
const exec = () => {

    routeDispatcher().execRoute(); 

}

/**
 * Initialize
 */ 

// Perform setup, sync
setup();

// Perform exec, async
if (document.readyState !== 'loading') {
    exec();
} else {
    document.addEventListener("DOMContentLoaded", exec);
}