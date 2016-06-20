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
var ng2_pagination_1 = require('ng2-pagination');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChange = new core_1.EventEmitter();
        this.showAll = false;
    }
    PaginationComponent.prototype.bubble = function (event) {
        this.pageChange.emit(event);
    };
    PaginationComponent.prototype.showAllPages = function () {
        this.showAll = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "config", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'as-pagination',
            templateUrl: 'pagination.component.html',
            styleUrls: ['pagination.component.css'],
            directives: [ng2_pagination_1.PaginationControlsCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-mAoy4yxP.tmp/0/app/components/pagination/pagination.component.js.map