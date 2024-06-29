"use strict";
(() => {
  // src/engine/routeDispatcher.ts
  var RouteDispatcher = class {
    constructor(SiteClass) {
      this._SiteClass = SiteClass;
    }
    matchRoute(path) {
      for (const route in this.routes) {
        if (route.endsWith("*")) {
          const baseRoute = route.slice(0, -1);
          if (path.startsWith(baseRoute)) {
            return this.routes[route];
          }
        } else if (route === path) {
          return this.routes[route];
        }
      }
      return null;
    }
    setupRoute() {
      const site = new this._SiteClass();
      site.setup();
      const path = window.location.pathname;
      const HandlerClass = this.matchRoute(path);
      if (HandlerClass) {
        const handlerInstance = new HandlerClass();
        handlerInstance.setup();
      } else {
      }
    }
    execRoute() {
      const site = new this._SiteClass();
      site.exec();
      const path = window.location.pathname;
      const HandlerClass = this.matchRoute(path);
      if (HandlerClass) {
        const handlerInstance = new HandlerClass();
        handlerInstance.exec();
      } else {
      }
    }
  };
})();
//# sourceMappingURL=routeDispatcher.js.map
