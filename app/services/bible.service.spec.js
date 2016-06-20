"use strict";
var testing_1 = require('@angular/core/testing');
var bible_service_1 = require('./bible.service');
testing_1.describe('Bible Service', function () {
    testing_1.beforeEachProviders(function () { return [bible_service_1.BibleService]; });
    testing_1.it('should ...', testing_1.inject([bible_service_1.BibleService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=bible.service.spec.js.map