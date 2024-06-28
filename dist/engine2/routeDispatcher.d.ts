export interface IRouteHandler {
    setup(): void;
    exec(): void;
}
type RouteHandlerClass = {
    new (): IRouteHandler;
};
export interface Routes {
    [path: string]: RouteHandlerClass;
}
export declare class RouteDispatcher {
    routes: Routes;
    constructor();
    matchRoute(path: string): RouteHandlerClass | null;
    setupRoute(): void;
    execRoute(): void;
}
export {};
