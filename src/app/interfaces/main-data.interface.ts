export interface MainDataInterface {
    output: string;
    theme: string;
    extTheme: string;
    serve: boolean;
    port: number;
    open: boolean;
    assetsFolder: string;
    documentationMainName: string;
    documentationMainDescription: string;
    base: string;
    hideGenerator: boolean;
    modules: any;
    readme: boolean;
    changelog: string;
    contributing: string;
    license: string;
    todo: string;
    markdowns: any[];
    additionalPages: any;
    pipes: any;
    classes: any;
    interfaces: any;
    components: any;
    directives: any;
    injectables: any;
    interceptors: any;
    miscellaneous: any;
    routes: any;
    tsconfig: string;
    toggleMenuItems: string[];
    navTabConfig: any[];
    includes: string;
    includesName: string;
    includesFolder: string;
    disableSourceCode: boolean;
    disableDomTree: boolean;
    disableTemplateTab: boolean;
    disableGraph: boolean;
    disableMainGraph: boolean;
    disableCoverage: boolean;
    disablePrivate: boolean;
    disableProtected: boolean;
    disableInternal: boolean;
    disableLifeCycleHooks: boolean;
    disableRoutesGraph: boolean;
    watch: boolean;
    mainGraph: string;
    coverageTest: boolean;
    coverageTestThreshold: number;
    coverageTestThresholdFail: boolean;
    coverageTestPerFile: boolean;
    coverageMinimumPerFile: number;
    routesLength: number;
    angularVersion: string;
    exportFormat: string;
    coverageData: Object;
    customFavicon: string;
    packageDependencies: Object[];
    packagePeerDependencies: Object[];
    gaID: string;
    gaSite: string;
    angularProject: boolean;
    angularJSProject: boolean;
}
