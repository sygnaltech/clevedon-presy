"use strict";
/*
 * Index
 * Main entry point
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const version_1 = require("./version");
const routes_1 = require("./routes");
// Global vars
const SITE_NAME = 'Site';
// Perform setup, sync
const setup = () => {
    console.log(`${SITE_NAME} package init v${version_1.VERSION}`);
    (0, routes_1.routeDispatcher)().setupRoute();
};
// Perform exec, async
// After DOM content loaded 
const exec = () => {
    (0, routes_1.routeDispatcher)().execRoute();
};
/**
 * Initialize
 */
// Perform setup, sync
setup();
// Perform exec, async
if (document.readyState !== 'loading') {
    exec();
}
else {
    document.addEventListener("DOMContentLoaded", exec);
}
