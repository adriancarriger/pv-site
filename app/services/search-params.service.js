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
var http_1 = require('@angular/http');
var SearchParamsService = (function () {
    function SearchParamsService() {
    }
    SearchParamsService.prototype.transform = function (paramsObj) {
        var searchParams = new http_1.URLSearchParams();
        Object.keys(paramsObj).forEach(function (key) {
            searchParams.set(key, paramsObj[key]);
        });
        return searchParams;
    };
    SearchParamsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchParamsService);
    return SearchParamsService;
}());
exports.SearchParamsService = SearchParamsService;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-CDZkVC0n.tmp/0/app/services/search-params.service.js.map