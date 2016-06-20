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
require('rxjs/add/operator/share');
var Subject_1 = require('rxjs/Subject');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var search_params_service_1 = require('./search-params.service');
var ApiObservableService = (function () {
    function ApiObservableService(http, searchParamsService) {
        this.http = http;
        this.searchParamsService = searchParamsService;
        this.haveSermons = {
            base: false,
            all: false
        };
        this.dataStore = { sermons: [] };
        this.preSermons$ = new Subject_1.Subject();
    }
    ApiObservableService.prototype.observe = function (paramsObj) {
        var searchParams = this.searchParamsService.transform(paramsObj);
        return this.http.get('http://pvbiblechurch.com/app-api/', {
            search: searchParams
        })
            .map(function (responseData) {
            return responseData.json();
        });
    };
    Object.defineProperty(ApiObservableService.prototype, "sermons$", {
        get: function () {
            return this.preSermons$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ApiObservableService.prototype.loadSermons = function (all) {
        var _this = this;
        var preType;
        if (this.haveSermons.all) {
            this.preSermons$.next(this.sermons);
            return;
        }
        else if (all) {
            preType = 'sermons-all';
            this.haveSermons.all = true;
        }
        else {
            preType = 'sermons-array';
            this.haveSermons.base = true;
        }
        this.observe({ type: preType })
            .subscribe(function (data) {
            _this.sermons = data;
            _this.preSermons$.next(_this.sermons);
        });
    };
    ApiObservableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, search_params_service_1.SearchParamsService])
    ], ApiObservableService);
    return ApiObservableService;
}());
exports.ApiObservableService = ApiObservableService;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-JUi8mYWH.tmp/0/app/services/api-observable.service.js.map