"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.NgcliAppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS
]);
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-uDhfkUoW.tmp/0/main.js.map