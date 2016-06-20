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
var Subject_1 = require('rxjs/Subject');
var moment = require('moment');
var AudioService = (function () {
    function AudioService(apiObservableService, renderer) {
        var _this = this;
        this.apiObservableService = apiObservableService;
        this.renderer = renderer;
        this.current = {
            id: 0,
            playing: false,
            init: false,
            title: '',
            speaker: '',
            duration: '',
            art: {},
            randomClass: ''
        };
        this.audioObjects = {};
        this.preCurrentAudio$ = new Subject_1.Subject();
        this.preAudioPosition$ = new Subject_1.Subject();
        this.apiObservableService.sermons$
            .subscribe(function (data) {
            _this.sermons = data;
        });
    }
    AudioService.prototype.play = function (setCurrent) {
        var _this = this;
        var oldId = this.current.id;
        if (this.current.id === 0 || (setCurrent !== undefined && setCurrent !== this.current.id)) {
            this.pause();
            this.current.id = setCurrent;
            // Create new audio object
            if (!(this.current.id in this.audioObjects)) {
                this.audioObjects[this.current.id] = new Audio();
                this.audioObjects[this.current.id].src = this.sermons[this.current.id]['audio'];
                this.current.init = true;
                this.metaData = this.renderer.listen(this.audioObjects[this.current.id], 'timeupdate', function (event) {
                    _this.getDuration();
                });
            }
            else {
                this.current.duration = this.displayTime(this.audioObjects[this.current.id].duration);
            }
        }
        if (this.current.playing === false) {
            // Start Audio 
            this.updateListeners(oldId);
            this.audioObjects[this.current.id].play();
            this.current.playing = true;
            this.current.title = this.sermons[this.current.id].name;
            this.current.speaker = this.sermons[this.current.id].speaker;
            this.current.art = this.sermons[this.current.id].art;
            this.preCurrentAudio$.next(this.current);
        }
    };
    AudioService.prototype.pause = function () {
        if (this.current.id in this.audioObjects) {
            this.audioObjects[this.current.id].pause();
            this.current.playing = false;
            this.preCurrentAudio$.next(this.current);
        }
    };
    AudioService.prototype.updateListeners = function (oldId) {
        var _this = this;
        if (oldId !== 0) {
            this.listenFunc();
        }
        this.listenFunc = this.renderer.listen(this.audioObjects[this.current.id], 'timeupdate', function (event) {
            _this.updatePosition();
        });
    };
    AudioService.prototype.getDuration = function () {
        this.current.duration = this.displayTime(this.audioObjects[this.current.id].duration);
        this.metaData();
        this.preCurrentAudio$.next(this.current);
    };
    AudioService.prototype.updatePosition = function () {
        var duration = ~~this.audioObjects[this.current.id].duration;
        var position = ~~this.audioObjects[this.current.id].currentTime;
        var percentage = (position / duration) * 100;
        var displayPosition = this.displayTime(position);
        this.preAudioPosition$.next({
            percentage: percentage,
            time: displayPosition
        });
    };
    AudioService.prototype.initCurrent = function () {
        this.preCurrentAudio$.next(this.current);
    };
    AudioService.prototype.displayTime = function (seconds) {
        var milliseconds = seconds * 1000;
        var displayTime = moment.utc(milliseconds).format('mm:ss');
        var hours = moment.utc(milliseconds).format('h');
        if (milliseconds >= 3600000) {
            displayTime = hours + ':' + displayTime;
        }
        return displayTime;
    };
    Object.defineProperty(AudioService.prototype, "currentAudio$", {
        get: function () {
            return this.preCurrentAudio$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "audioPosition$", {
        get: function () {
            return this.preAudioPosition$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AudioService.prototype.setPosition = function (percentage) {
        var newPosition = ~~this.audioObjects[this.current.id].duration * percentage * 0.01;
        this.audioObjects[this.current.id].currentTime = newPosition;
    };
    AudioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_observable_service_1.ApiObservableService, core_1.Renderer])
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
//# sourceMappingURL=audio.service.js.map