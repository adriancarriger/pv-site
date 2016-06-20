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
var ng2_nouislider_1 = require('ng2-nouislider');
var SliderComponent = (function () {
    function SliderComponent() {
        this.seek = new core_1.EventEmitter();
    }
    SliderComponent.prototype.bubbleChange = function (event) {
        if (Math.floor(this.lastInput) !== Math.floor(this.position)) {
            this.seek.emit(this.position);
        }
    };
    SliderComponent.prototype.ngOnChanges = function (changes) {
        this.lastInput = changes.position.currentValue;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SliderComponent.prototype, "position", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SliderComponent.prototype, "seek", void 0);
    SliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-slider',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'slider.component.html',
            styleUrls: ['slider.component.css'],
            directives: [ng2_nouislider_1.Nouislider]
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-mAoy4yxP.tmp/0/app/components/slider/slider.component.js.map