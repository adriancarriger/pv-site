"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var api_observable_service_1 = require('../services/api-observable.service');
var index_1 = require('../components/header-default/index');
var index_2 = require('../components/sermons-list/index');
var DefaultPageComponent = (function () {
    function DefaultPageComponent(curr, apiObservableService) {
        this.curr = curr;
        this.apiObservableService = apiObservableService;
        this.testStudies = [
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: true
            },
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: false
            },
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: false
            },
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: false
            }
        ];
        this.testEvents = [
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: true
            },
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: false
            },
            {
                name: 'Old Testimate',
                time: 'Wed at 3:30pm',
                location: 'PV Bible Church',
                extra: 'Childcare available',
                learn: false
            }
        ];
        this.ready = false;
    }
    DefaultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiObservableService.sermons$
            .subscribe(function (data) {
            _this.sermons = Object.keys(data).map(function (key) {
                var pair = {
                    key: undefined
                };
                pair = data[key];
                pair.key = key;
                return pair;
            });
        });
        this.apiObservableService.loadSermons(true);
        this.apiObservableService.observe({
            type: 'defaultPage',
            category: this.curr.urlSegments[0].segment,
            slug: this.curr.getParam('type')
        })
            .subscribe(function (data) {
            _this.info = data;
            _this.ready = true;
            // Temp
            var titleArray = _this.info.title.split("'");
            _this.tempSlug = titleArray[0];
            // End Temp
        });
    };
    DefaultPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-default-page',
            templateUrl: 'default-page.component.html',
            styleUrls: ['default-page.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                index_1.HeaderDefaultComponent,
                index_2.SermonsListComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, api_observable_service_1.ApiObservableService])
    ], DefaultPageComponent);
    return DefaultPageComponent;
}());
exports.DefaultPageComponent = DefaultPageComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-CDZkVC0n.tmp/0/app/+default-page/default-page.component.js.map