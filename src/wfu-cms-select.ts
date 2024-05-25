


const CMS_SELECT = "wfu-cmsselect"; 

const CMS_SELECT_DATA = "wfu-cmsselect-data"; 

const CMS_SELECT_TEXT = "wfu-cmsselect-text"; 
const CMS_SELECT_VALUE = "wfu-cmsselect-value"; 



export class Sa5CmsSelect {

    //  modelDropdown: WebflowDropdown; 
    
    constructor() {
    }

    initAll() {
        // Get all elements with the custom attribute `wfu-cmsselect`
        const cmsSelectElements = document.querySelectorAll(`[${CMS_SELECT}]`);
        
        // Iterate over each `wfu-cmsselect` element
        cmsSelectElements.forEach(selectElement => {
            const dataIdentifier = selectElement.getAttribute(CMS_SELECT);

            if (dataIdentifier) {
                // Find matching data elements with the custom attribute `wfu-cmsselect-data` and the same value
                const dataElements = document.querySelectorAll(`[${CMS_SELECT_DATA}="${dataIdentifier}"]`);

                dataElements.forEach(dataElement => {
                    // Find child elements with `wfu-cmsselect-text` and optionally `wfu-cmsselect-value`
                    const textElements = dataElement.querySelectorAll(`[${CMS_SELECT_TEXT}]`);

                    textElements.forEach(textElement => {
                        const textValue = textElement.getAttribute(CMS_SELECT_TEXT);
                        const optionValue = textElement.getAttribute(CMS_SELECT_VALUE);

                        if (textValue) {
                            // Create an option element
                            const optionElement = document.createElement('option');
                            optionElement.textContent = textValue;

                            // Set the option value if it exists
                            if (optionValue) {
                                optionElement.value = optionValue;
                            }

                            // Append the option to the `wfu-cmsselect` element
                            (selectElement as HTMLSelectElement).appendChild(optionElement);
                        }
                    });
                });
            }
        });
    }

}
