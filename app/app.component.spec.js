"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var global_events_service_1 = require('./services/global-events.service');
testing_1.beforeEachProviders(function () { return [
    app_component_1.AppComponent,
    global_events_service_1.GlobalEventsService
]; });
testing_1.describe('App: Ngcli', function () {
    testing_1.it('should create the app', testing_1.inject([app_component_1.AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map