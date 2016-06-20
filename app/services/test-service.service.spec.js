"use strict";
var testing_1 = require('@angular/core/testing');
var test_service_service_1 = require('./test-service.service');
testing_1.describe('TestService Service', function () {
    testing_1.beforeEachProviders(function () { return [test_service_service_1.TestServiceService]; });
    testing_1.it('should ...', testing_1.inject([test_service_service_1.TestServiceService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=test-service.service.spec.js.map