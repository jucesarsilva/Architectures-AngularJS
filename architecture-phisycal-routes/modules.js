/**
 * @description - register modules for application. Centralize resources in modules, 
 * should load phisycal files for inject into centralized module.
 */
var modules = {};
modules.main = "AppMain";
modules.directives = modules.main.concat(".directives");
modules.filters = modules.main.concat(".filters");
modules.services = modules.main.concat(".services");
modules.factories = modules.main.concat(".factories");