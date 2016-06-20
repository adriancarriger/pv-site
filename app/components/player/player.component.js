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
var index_1 = require('../slider/index');
var audio_service_1 = require('../../services/audio.service');
var PlayerComponent = (function () {
    function PlayerComponent(audioService) {
        this.audioService = audioService;
        this.playing = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.audioService.currentAudio$.subscribe(function (data) {
            _this.current = data;
        });
        this.audioService.audioPosition$.subscribe(function (data) {
            _this.position = data;
        });
    };
    PlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-player',
            templateUrl: 'player.component.html',
            styleUrls: ['player.component.css'],
            directives: [index_1.SliderComponent]
        }), 
        __metadata('design:paramtypes', [audio_service_1.AudioService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-erU5Ws0U.tmp/0/app/components/player/player.component.js.map