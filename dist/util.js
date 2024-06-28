"use strict";
// Determine Webflow breakpoint?
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPixels = exports.hasAncestorWithAttribute = exports.getAncestorAttributeValue = exports.findAncestorWithAttribute = exports.getCurrentScriptUrl = exports.prependToTitle = exports.replaceCSSLink = exports.replaceScriptSource = exports.loadCSS = exports.loadScript = exports.getQueryParam = void 0;
// Utility function to get a query parameter value by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
exports.getQueryParam = getQueryParam;
// Add a new async script to the page
// at the end of the body
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    //    script.async = true;
    document.body.appendChild(script);
}
exports.loadScript = loadScript;
// Add a new CSS file to the page
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}
exports.loadCSS = loadCSS;
// Replace an existing script source
function replaceScriptSource(element, newSrc) {
    element.src = newSrc;
}
exports.replaceScriptSource = replaceScriptSource;
// Replace an existing CSS source
function replaceCSSLink(element, newHref) {
    element.href = newHref;
}
exports.replaceCSSLink = replaceCSSLink;
// Function to prepend text to the document title in development mode
function prependToTitle(text) {
    document.title = `${text}${document.title}`;
}
exports.prependToTitle = prependToTitle;
// Function to get the current script URL
function getCurrentScriptUrl() {
    // Check if document.currentScript is supported
    if (document.currentScript) {
        // Cast to HTMLScriptElement and get the src attribute
        const currentScript = document.currentScript;
        return currentScript.src;
    }
    // For browsers that do not support document.currentScript
    console.error("document.currentScript is not supported in this browser.");
    return null;
}
exports.getCurrentScriptUrl = getCurrentScriptUrl;
function findAncestorWithAttribute(element, attributeName) {
    let currentElement = element;
    while (currentElement) {
        if (currentElement.hasAttribute(attributeName)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}
exports.findAncestorWithAttribute = findAncestorWithAttribute;
function getAncestorAttributeValue(element, attributeName) {
    let currentElement = element;
    while (currentElement) {
        if (currentElement.hasAttribute(attributeName)) {
            return currentElement.getAttribute(attributeName);
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}
exports.getAncestorAttributeValue = getAncestorAttributeValue;
function hasAncestorWithAttribute(element, attributeName) {
    return findAncestorWithAttribute(element, attributeName) !== null;
}
exports.hasAncestorWithAttribute = hasAncestorWithAttribute;
function convertToPixels(value, contextElement = document.documentElement) {
    // Parse the numeric value and unit, including negative values
    const match = value.match(/^(-?\d+\.?\d*)(rem|em|px|vh|vw|%)$/);
    if (!match)
        throw new Error('Invalid value format');
    const [, amountStr, unit] = match;
    const amount = parseFloat(amountStr);
    // Convert based on the unit
    switch (unit) {
        case 'px':
            return amount;
        case 'rem':
            return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
        case 'em':
            // For 'em', it's relative to the font-size of the context element.
            return amount * parseFloat(getComputedStyle(contextElement).fontSize);
        case 'vh':
            return amount * window.innerHeight / 100;
        case 'vw':
            return amount * window.innerWidth / 100;
        case '%':
            // For %, it's relative to the parent element's size. This can be tricky as it depends on the property (width, height, font-size, etc.).
            // In this example, we'll use it relative to the width of the context element, but you might need to adjust based on your specific use case.
            return amount * contextElement.clientWidth / 100;
        default:
            throw new Error('Unsupported unit');
    }
}
exports.convertToPixels = convertToPixels;
/*
// Example usage:
const pixelValue = convertToPixels("10vh");
console.log(pixelValue);
*/
