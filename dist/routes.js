"use strict";
(() => {
  // src/page/home.ts
  var HomePage = class {
    constructor() {
    }
    setup() {
    }
    exec() {
      console.log("Home.");
    }
  };

  // src/wfu-cms-select.ts
  var CMS_SELECT = "wfu-cmsselect";
  var CMS_SELECT_DATA = "wfu-cmsselect-data";
  var CMS_SELECT_TEXT = "wfu-cmsselect-text";
  var CMS_SELECT_VALUE = "wfu-cmsselect-value";
  var Sa5CmsSelect = class {
    constructor() {
    }
    initAll() {
      const cmsSelectElements = document.querySelectorAll(`[${CMS_SELECT}]`);
      cmsSelectElements.forEach((selectElement) => {
        const dataIdentifier = selectElement.getAttribute(CMS_SELECT);
        if (dataIdentifier) {
          const dataElements = document.querySelectorAll(`[${CMS_SELECT_DATA}="${dataIdentifier}"]`);
          dataElements.forEach((dataElement) => {
            const textElements = dataElement.querySelectorAll(`[${CMS_SELECT_TEXT}]`);
            textElements.forEach((textElement) => {
              const textValue = textElement.getAttribute(CMS_SELECT_TEXT);
              const optionValue = textElement.getAttribute(CMS_SELECT_VALUE);
              if (textValue) {
                const optionElement = document.createElement("option");
                optionElement.textContent = textValue;
                if (optionValue) {
                  optionElement.value = optionValue;
                }
                selectElement.appendChild(optionElement);
              }
            });
          });
        }
      });
    }
  };

  // src/engine/core.ts
  function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  function loadEngineCSS(cssFileName) {
    const currentScript = document.currentScript;
    if (currentScript) {
      const scriptURL = new URL(currentScript.src);
      const origin = scriptURL.origin;
      const path = scriptURL.pathname.substring(0, scriptURL.pathname.lastIndexOf("/"));
      const cssURL = `${origin}${path}/css/${cssFileName}`;
      loadCSS(cssURL);
    } else {
      console.error("Unable to determine the currently executing script.");
    }
  }

  // src/site.ts
  var Site = class {
    constructor() {
    }
    setup() {
      loadEngineCSS("site.css");
    }
    exec() {
      console.log("Site.");
      const cmsSelect = new Sa5CmsSelect();
      cmsSelect.initAll();
      const churchSelect = document.getElementById("church");
      if (churchSelect) {
        churchSelect.addEventListener("change", () => {
          const selectedChurch = churchSelect.value;
          const churchSelectors = document.querySelectorAll("[site-church-selector]");
          churchSelectors.forEach((selectElement) => {
            const matchingOption = Array.from(selectElement.options).find((option) => option.value === selectedChurch);
            if (matchingOption) {
              selectElement.value = matchingOption.value;
              const inputEvent = new Event("input", { bubbles: true });
              selectElement.dispatchEvent(inputEvent);
            }
          });
          console.log(`Selected church: ${selectedChurch}`);
        });
      } else {
        console.error('Select element with ID "church" not found.');
      }
    }
  };

  // src/engine/routeDispatcher.ts
  var RouteDispatcher = class {
    constructor() {
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
      new Site().setup();
      const path = window.location.pathname;
      const HandlerClass = this.matchRoute(path);
      if (HandlerClass) {
        const handlerInstance = new HandlerClass();
        handlerInstance.setup();
      } else {
      }
    }
    execRoute() {
      new Site().exec();
      const path = window.location.pathname;
      const HandlerClass = this.matchRoute(path);
      if (HandlerClass) {
        const handlerInstance = new HandlerClass();
        handlerInstance.exec();
      } else {
      }
    }
  };

  // src/routes.ts
  var routeDispatcher = () => {
    var routeDispatcher2 = new RouteDispatcher();
    routeDispatcher2.routes = {
      "/": HomePage
    };
    return routeDispatcher2;
  };
})();
//# sourceMappingURL=routes.js.map
