"use strict";
/*
 * SITE
 * Main entry point
 *
 * https://engine.sygnal.com/
 *
 * ENGINE MODE
 * ?engine.mode=dev
 * ?engine.mode=prod
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeDispatcher = void 0;
const home_1 = require("./page/home");
const sse_1 = require("@sygnal/sse");
const site_1 = require("./site");
const routeDispatcher = () => {
    var routeDispatcher = new sse_1.RouteDispatcher(site_1.Site);
    routeDispatcher.routes = {
        // Site paes
        '/': home_1.HomePage,
        // TEST Pages
    };
    return routeDispatcher;
};
exports.routeDispatcher = routeDispatcher;
