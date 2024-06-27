(() => {
  // src/page/home.ts
  var HomePage = class {
    constructor() {
    }
    init() {
      console.log("Home.");
    }
  };

  // src/routeDispatcher.ts
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
    dispatchRoute() {
      const path = window.location.pathname;
      const handler = this.matchRoute(path);
      if (handler) {
        handler();
      } else {
      }
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

  // src/site.ts
  var Site = class {
    constructor() {
    }
    init() {
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

  // src/index.ts
  var SITE_NAME = "Site";
  var VERSION = "v0.1.1";
  window[SITE_NAME] = window[SITE_NAME] || {};
  var SiteData = window[SITE_NAME];
  var init = () => {
    console.log(`${SITE_NAME} package init ${VERSION}`);
    new Site().init();
    var routeDispatcher = new RouteDispatcher();
    routeDispatcher.routes = {
      "/": () => {
        new HomePage().init();
      }
    };
    routeDispatcher.dispatchRoute();
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=index.js.map
