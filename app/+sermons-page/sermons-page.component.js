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
var index_1 = require('../components/header-default/index');
var index_2 = require('../components/filter-default/index');
var index_3 = require('../components/sermons-list/index');
var api_observable_service_1 = require('../services/api-observable.service');
var audio_service_1 = require('../services/audio.service');
/*
let tempImage = // Will connect to api soon
  'http://pvbiblechurch.com/wp-content' + // Avoid max line length (temp)
  '/uploads/mp/image-cache/site/8' +
  '/ipod-headphones-1920x1080.414acded74a4af3f514ff36e41045e5b.jpg';
  */
var tempImage = 'app/assets/sermons.jpeg';
var SermonsPageComponent = (function () {
    function SermonsPageComponent(apiObservableService, audioService) {
        this.apiObservableService = apiObservableService;
        this.audioService = audioService;
        this.currentAudio = {
            id: 0,
            playing: false
        };
        this.latestSermon = {
            id: 0
        };
        this.info = {
            image_small: tempImage,
            image_medium: tempImage,
            image_large: tempImage,
            image_x_large: tempImage,
            title: 'Sermons'
        };
        this.filterInfo = {
            defaults: {
                box1: 'All books',
                box2: 'All years',
                box3: 'AM/PM',
                alwaysSome: false
            },
            box1: [
                'Genesis', 'Exodus', 'Leviticus', 'Numbers',
                'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
                '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
                '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
                'Esther', 'Job', 'Psalm', 'Proverbs',
                'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah',
                'Lamentations', 'Ezekiel', 'Daniel', 'Hosea',
                'Joel', 'Amos', 'Obadiah', 'Jonah',
                'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
                'Haggai', 'Zechariah', 'Malachi', 'Matthew',
                'Mark', 'Luke', 'John', 'Acts',
                'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
                'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians',
                '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus',
                'Philemon', 'Hebrews', 'James', '1 Peter',
                '2 Peter', '1 John', '2 John', '3 John',
                'Jude', 'Revelation', 'Selected Scriptures'
            ],
            box2: [
                '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008',
                '2007', '2006', '2005', '2004'
            ],
            box3: ['AM', 'PM']
        };
    }
    SermonsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiObservableService.sermons$
            .subscribe(function (data) {
            _this.sermons = Object.keys(data).map(function (key) {
                var pair = {
                    key: undefined
                };
                pair = data[key];
                pair.key = key;
                return pair;
            });
        });
        this.apiObservableService.loadSermons(true);
        this.apiObservableService.observe({
            type: 'general-meta'
        })
            .subscribe(function (data) {
            _this.filterInfo.box1 = data.books;
            _this.latestSermon = data.latestSermon;
        });
        this.audioService.currentAudio$.subscribe(function (data) {
            _this.updateChange();
            _this.currentAudio.playing = data.playing;
            _this.currentAudio.id = data.id;
        });
    };
    SermonsPageComponent.prototype.updateChange = function () {
        this.lastChange = new Date().getTime();
    };
    SermonsPageComponent.prototype.playLatest = function () {
        window.scrollTo(0, 400);
        this.audioService.play(this.latestSermon.id);
    };
    SermonsPageComponent.prototype.scrollY = function (distance, goal) {
        var _this = this;
        if (distance <= 0) {
            return;
        }
        setTimeout(function () {
            window.scrollTo(0, goal - distance);
            _this.scrollY(distance - 75, goal);
        }, 1);
    };
    SermonsPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-sermons-page',
            templateUrl: 'sermons-page.component.html',
            styleUrls: ['sermons-page.component.css'],
            directives: [
                index_1.HeaderDefaultComponent,
                index_2.FilterDefaultComponent,
                index_3.SermonsListComponent
            ]
        }), 
        __metadata('design:paramtypes', [api_observable_service_1.ApiObservableService, audio_service_1.AudioService])
    ], SermonsPageComponent);
    return SermonsPageComponent;
}());
exports.SermonsPageComponent = SermonsPageComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-mAoy4yxP.tmp/0/app/+sermons-page/sermons-page.component.js.map