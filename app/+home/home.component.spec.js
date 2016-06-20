"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var home_component_1 = require('./home.component');
var testing_3 = require('@angular/router/testing');
testing_1.describe('Component: Home', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [
        home_component_1.HomeComponent,
        testing_3.ROUTER_FAKE_PROVIDERS
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([home_component_1.HomeComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should build the component', function (done) {
        return builder
            .createAsync(home_component_1.HomeComponent).then(function (fixture) {
            var nativeElement = fixture.nativeElement;
            fixture.detectChanges();
            var firstH1Text = nativeElement.querySelector('.jumbotron h1:first-of-type').innerHTML;
            testing_1.expect(firstH1Text).toBe('Home Page');
            done();
        })
            .catch(function (e) { return done.fail(e); });
    });
});
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-OpBPmHPt.tmp/0/app/+home/home.component.spec.js.map