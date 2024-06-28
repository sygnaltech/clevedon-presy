interface SiteDataType {
}
declare global {
    interface Window {
        fsAttributes: [string, (filterInstances: any[]) => void][];
        Site: SiteDataType;
    }
}
export {};
