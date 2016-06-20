"use strict";
var testing_1 = require('@angular/core/testing');
var global_events_service_1 = require('./global-events.service');
testing_1.describe('GlobalEvents Service', function () {
    testing_1.beforeEachProviders(function () { return [global_events_service_1.GlobalEventsService]; });
    testing_1.it('should ...', testing_1.inject([global_events_service_1.GlobalEventsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=global-events.service.spec.js.map