"use strict";
var testing_1 = require('@angular/core/testing');
var audio_service_1 = require('./audio.service');
testing_1.describe('Audio Service', function () {
    testing_1.beforeEachProviders(function () { return [audio_service_1.AudioService]; });
    testing_1.it('should ...', testing_1.inject([audio_service_1.AudioService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=audio.service.spec.js.map