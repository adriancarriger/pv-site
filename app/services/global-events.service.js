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
var Rx_1 = require('rxjs/Rx');
var GlobalEventsService = (function () {
    function GlobalEventsService() {
        this.throttleConfig = {
            scroll: 10,
            resize: 300
        };
        this.scroll$ = new core_1.EventEmitter();
        this.resize$ = new core_1.EventEmitter();
    }
    GlobalEventsService.prototype.init = function () {
        var _this = this;
        // Tried to addapt this (AngularJS): http://stackoverflow.com/a/23323821/5357459
        // using this (Angular 2): http://stackoverflow.com/a/34703015/5357459
        var scrollEventStream = Rx_1.Observable.fromEvent(document, 'scroll')
            .throttleTime(this.throttleConfig.scroll);
        scrollEventStream.subscribe(function (event) {
            _this.scroll$.emit(event);
        });
        var resizeEventStream = Rx_1.Observable.fromEvent(window, 'resize')
            .throttleTime(this.throttleConfig.resize);
        resizeEventStream.subscribe(function (event) {
            _this.resize$.emit(event);
        });
    };
    GlobalEventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GlobalEventsService);
    return GlobalEventsService;
}());
exports.GlobalEventsService = GlobalEventsService;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-CDZkVC0n.tmp/0/app/services/global-events.service.js.map