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
var api_observable_service_1 = require('./api-observable.service');
var PreloadService = (function () {
    function PreloadService(apiObservableService) {
        this.apiObservableService = apiObservableService;
        this.promises = 0;
    }
    PreloadService.prototype.load = function () {
        console.log('preloading started...');
        // this.apiObservableService.fullLoad();
    };
    PreloadService.prototype.preloadReady = function () {
        return this.promises++ === 0;
    };
    PreloadService.prototype.requestStart = function () {
        this.promises++;
        clearTimeout(this.timeout);
        console.log('Requesting data', this.promises);
    };
    PreloadService.prototype.requestComplete = function () {
        var _this = this;
        this.promises--;
        console.log('Api just got data', this.promises);
        if (this.promises === 0) {
            this.timeout = setTimeout(function () {
                _this.load();
            }, 3500);
        }
    };
    PreloadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_observable_service_1.ApiObservableService])
    ], PreloadService);
    return PreloadService;
}());
exports.PreloadService = PreloadService;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-e8MYKqVq.tmp/0/app/services/preload.service.js.map