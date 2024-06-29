/*
 * Index  
 * Main entry point
 * 
 */

import { VERSION } from "./version";
import { routeDispatcher } from "./routes";
import { Page } from "./engine/index"; 

interface SiteDataType {
    // Define properties and their types for SiteDataType
    // For example:
    // someProperty?: string;
    // anotherProperty?: number;
    // Add other properties as needed
} 

interface SSEType {
    baseUrl?: string;  
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

    // Extend the Window interface to include fsAttributes
    fsAttributes: [string, (filterInstances: any[]) => void][];
    Site: SiteDataType;
    SSE: SSEType;
    //   modelsDataSourceElems: NodeListOf<HTMLElement>;
    //   modelsSelectElem: HTMLElement | null;
    //   modelsNavElem: HTMLElement | null;
    }
}

// Ensure global SSE object is initialized
if (!window.SSE) {
    window.SSE = {};
}

// Perform setup, sync
const setup = () => {
    
    console.log(`${SITE_NAME} package init v${VERSION}`);
    
console.log("script @ setup", Page.getCurrentScriptBaseUrl());

window.SSE.baseUrl = Page.getCurrentScriptBaseUrl(); 

    routeDispatcher().setupRoute(); 

}

// Perform exec, async
// After DOM content loaded 
const exec = () => {

    console.log("script @ exec1", window.SSE.baseUrl);
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