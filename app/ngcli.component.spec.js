"use strict";
var testing_1 = require('@angular/core/testing');
var ngcli_component_1 = require('../app/ngcli.component');
var global_events_service_1 = require('./services/global-events.service');
testing_1.beforeEachProviders(function () { return [
    ngcli_component_1.NgcliAppComponent,
    global_events_service_1.GlobalEventsService
]; });
testing_1.describe('App: Ngcli', function () {
    testing_1.it('should create the app', testing_1.inject([ngcli_component_1.NgcliAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-CDZkVC0n.tmp/0/app/ngcli.component.spec.js.map