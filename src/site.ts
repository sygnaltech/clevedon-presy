
/*
 * Site
 */

// import gsap from 'gsap'; 
import { Sa5CmsSelect } from './wfu-cms-select';
import { IRouteHandler } from "./engine/routeDispatcher";
import { loadCSS, loadEngineCSS } from "./engine/core";
 

export class Site implements IRouteHandler {

//  modelDropdown: WebflowDropdown; 

  constructor() {
  }

  setup() {

    loadEngineCSS("site.css"); 
   
  }

  exec() {
    
    console.log("Site."); 

    const cmsSelect = new Sa5CmsSelect();
    cmsSelect.initAll(); 

    const churchSelect = document.getElementById('church') as HTMLSelectElement;
  
    if (churchSelect) {
      churchSelect.addEventListener('change', () => {
        const selectedChurch = churchSelect.value;



      // Find all elements with the custom attribute `site-church-selector`
      const churchSelectors = document.querySelectorAll('[site-church-selector]') as NodeListOf<HTMLSelectElement>;

      // Update each found select element to match the selected value
      churchSelectors.forEach(selectElement => {
        // Find the option with the matching value
        const matchingOption = Array.from(selectElement.options).find(option => option.value === selectedChurch);

        if (matchingOption) {
          // Set the select element's value to the matching option's value
          selectElement.value = matchingOption.value;
          
          // const changeEvent = new Event('change', { bubbles: true, cancelable: true });
          // selectElement.dispatchEvent(changeEvent);

          const inputEvent = new Event('input', { bubbles: true });
          selectElement.dispatchEvent(inputEvent);
        }
      });


        console.log(`Selected church: ${selectedChurch}`);

// site-church-selector


      });
    } else {
      console.error('Select element with ID "church" not found.');
    }

    // const elements: NodeListOf<Element> = document.querySelectorAll(`.${item.className}`);
    // console.log("Making elements visible", elements);
    // gsap.to(elements, { display: 'block' });


  }

  
  



}
