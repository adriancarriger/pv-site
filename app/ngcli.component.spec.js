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
//# sourceMappingURL=ngcli.component.spec.js.map