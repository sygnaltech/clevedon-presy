(() => {
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
})();
//# sourceMappingURL=site.js.map