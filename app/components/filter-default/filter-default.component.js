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
var global_events_service_1 = require('../../services/global-events.service');
var ng2_select_1 = require('ng2-select');
var common_1 = require('@angular/common');
require('rxjs/add/operator/debounceTime');
var FilterDefaultComponent = (function () {
    function FilterDefaultComponent(globalEventsService, element) {
        this.globalEventsService = globalEventsService;
        this.element = element;
        this.update = new core_1.EventEmitter();
        this.term = '';
        this.outputData = {
            term: '',
            box1: undefined,
            box2: undefined,
            box3: undefined
        };
        this.stuck = false;
        this.termControl = new common_1.Control();
    }
    FilterDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var el = this.element.nativeElement;
        var filterOffset = el.firstChild.offsetTop;
        var navHeight = document.getElementById('navbar').offsetHeight;
        var stickyPoint = filterOffset - navHeight;
        this.globalEventsService.scroll$.subscribe(function (data) {
            var yPos = data.path[1].pageYOffset;
            _this.stuck = yPos >= stickyPoint;
        });
        this.inputData.box1.unshift(this.inputData.defaults.box1);
        this.inputData.box2.unshift(this.inputData.defaults.box2);
        this.inputData.box3.unshift(this.inputData.defaults.box3);
        this.outputData.box1 = this.inputData.defaults.box1;
        this.outputData.box2 = this.inputData.defaults.box2;
        this.outputData.box3 = this.inputData.defaults.box3;
        this.update.emit(this.outputData);
        this.termControl.valueChanges
            .debounceTime(1000) // Long debounce for short searches
            .subscribe(function (newValue) {
            _this.term = newValue;
            if (_this.term.length >= 3 || _this.term.length === 0) {
                return;
            }
            _this.sendOutput('term', _this.term);
        });
    };
    FilterDefaultComponent.prototype.sendOutput = function (key, value, debounceWait) {
        var _this = this;
        if (!debounceWait || value.length >= 3 || value.length === 0) {
            setTimeout(function () {
                _this.outputData[key] = value;
                _this.update.emit(_this.outputData);
            }, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FilterDefaultComponent.prototype, "inputData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterDefaultComponent.prototype, "update", void 0);
    FilterDefaultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-filter-default',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'filter-default.component.html',
            styleUrls: ['filter-default.component.css'],
            directives: [ng2_select_1.SELECT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [global_events_service_1.GlobalEventsService, core_1.ElementRef])
    ], FilterDefaultComponent);
    return FilterDefaultComponent;
}());
exports.FilterDefaultComponent = FilterDefaultComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-e8MYKqVq.tmp/0/app/components/filter-default/filter-default.component.js.map