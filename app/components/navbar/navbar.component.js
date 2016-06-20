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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var router_1 = require('@angular/router');
var api_observable_service_1 = require('../../services/api-observable.service');
var index_1 = require('../pv-logo/index');
var NavbarComponent = (function () {
    function NavbarComponent(apiObservableService) {
        this.apiObservableService = apiObservableService;
        this.stickyNav = true;
        this.pages = false;
    }
    NavbarComponent.prototype.hasX = function (obj, X) {
        if (X in obj) {
            return true;
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isCollapsed = true;
        return this.apiObservableService.observe({ type: 'menu' })
            .subscribe(function (data) {
            _this.pages = data;
        });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, ng2_bootstrap_1.CollapseDirective, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.PvLogoComponent],
            providers: [api_observable_service_1.ApiObservableService]
        }), 
        __metadata('design:paramtypes', [api_observable_service_1.ApiObservableService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-yf5H8foM.tmp/0/app/components/navbar/navbar.component.js.map