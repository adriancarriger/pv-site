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
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-yf5H8foM.tmp/0/app/services/search-params.service.spec.js.map