"use strict";
var testing_1 = require('@angular/core/testing');
var search_params_service_1 = require('./search-params.service');
testing_1.describe('SearchParams Service', function () {
    testing_1.beforeEachProviders(function () { return [search_params_service_1.SearchParamsService]; });
    testing_1.it('should create the service', testing_1.inject([search_params_service_1.SearchParamsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
    testing_1.it('should create a URLSearchParams object', testing_1.inject([search_params_service_1.SearchParamsService], function (service) {
        var obj = {
            type: 'defaultPage',
            category: 'testCat'
        };
        var newObj = service.transform(obj);
        testing_1.expect(newObj.get('type')).toBe('defaultPage');
        testing_1.expect(newObj.has('category')).toBeTruthy();
    }));
});
//# sourceMappingURL=search-params.service.spec.js.map