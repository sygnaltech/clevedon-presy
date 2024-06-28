"use strict";
/*
 * Site
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Site = void 0;
// import gsap from 'gsap'; 
const wfu_cms_select_1 = require("./wfu-cms-select");
const sse_1 = require("@sygnal/sse");
class Site {
    //  modelDropdown: WebflowDropdown; 
    constructor() {
    }
    setup() {
        sse_1.Page.loadEngineCSS("site.css");
    }
    exec() {
        //    console.log("Site."); 
        const cmsSelect = new wfu_cms_select_1.Sa5CmsSelect();
        cmsSelect.initAll();
        // const churchSelect = document.getElementById('church') as HTMLSelectElement;
        // if (churchSelect) {
        //   churchSelect.addEventListener('change', () => {
        //     const selectedChurch = churchSelect.value;
        // Find all elements with the custom attribute `site-church-selector`
        const churchSelectors = document.querySelectorAll('[site-church-selector]');
        // Update each found select element to match the selected value
        churchSelectors.forEach(selectElement => {
            // Find the option with the matching value
            // const matchingOption = Array.from(selectElement.options).find(option => option.value === selectedChurch);
            // if (matchingOption) {
            //   // Set the select element's value to the matching option's value
            //   selectElement.value = matchingOption.value;
            //   // const changeEvent = new Event('change', { bubbles: true, cancelable: true });
            //   // selectElement.dispatchEvent(changeEvent);
            //   const inputEvent = new Event('input', { bubbles: true });
            //   selectElement.dispatchEvent(inputEvent);
            // }
        });
        //        console.log(`Selected church: ${selectedChurch}`);
        // site-church-selector
        //      });
        // } else {
        //   console.error('Select element with ID "church" not found.');
        // }
    }
}
exports.Site = Site;
