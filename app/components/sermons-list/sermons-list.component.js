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
var search_sermons_pipe_1 = require('../../pipes/search-sermons.pipe');
var array_pipe_1 = require('../../pipes/array.pipe');
var angular2_moment_1 = require('angular2-moment');
var index_1 = require('../pagination/index');
var ng2_pagination_1 = require('ng2-pagination');
var audio_service_1 = require('../../services/audio.service');
var order_by_pipe_1 = require('../../pipes/order-by.pipe');
var global_events_service_1 = require('../../services/global-events.service');
var SermonsListComponent = (function () {
    function SermonsListComponent(audioService, element, globalEventsService) {
        var _this = this;
        this.audioService = audioService;
        this.element = element;
        this.globalEventsService = globalEventsService;
        this.filteredItems = 0;
        this.showPagesComponent = true;
        this.filteredCount = { count: 0 };
        this.config = {
            id: 'custom',
            itemsPerPage: 25,
            currentPage: 1
        };
        this.audioService.currentAudio$.subscribe(function (data) {
            _this.test = new Date().getTime();
            _this.current = data;
        });
    }
    SermonsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalEventsService.scroll$.subscribe(function (data) {
            var yPos = data.path[1].pageYOffset;
            _this.domScroll = yPos;
        });
    };
    SermonsListComponent.prototype.ngOnChanges = function (changes) {
        this.checkHeight();
        this.getFiltered();
        this.showPagesComponent = true;
    };
    SermonsListComponent.prototype.getFiltered = function () {
        var filteredArray = [];
        var defaults = ['', 'All books', 'All years', 'AM/PM'];
        for (var key in this.filterValues) {
            if (defaults.indexOf(this.filterValues[key]) === -1) {
                filteredArray.push(this.filterValues[key]);
            }
        }
        for (var i = 0; i < filteredArray.length; i++) {
            if (i === 0) {
                this.filterReadable = '"' + filteredArray[i] + '"';
            }
            else if (filteredArray.length === i + 1) {
                this.filterReadable += ', and "' + filteredArray[i] + '"';
            }
            else {
                this.filterReadable += ', "' + filteredArray[i] + '"';
            }
        }
    };
    SermonsListComponent.prototype.pageChange = function () {
        var _this = this;
        this.checkHeight();
        setTimeout(function () {
            _this.checkHeight();
        }, 50);
    };
    SermonsListComponent.prototype.checkHeight = function () {
        var newHeight = this.element.nativeElement.firstChild.offsetHeight;
        var navs = 54 + 50;
        var offsetTop = this.element.nativeElement.offsetTop;
        var offset = offsetTop - navs;
        var diff = (offset - this.domScroll) * -1;
        if (newHeight < this.domHeight) {
            var heightChange = this.domHeight - newHeight;
            var change = void 0;
            if (diff > heightChange) {
                change = heightChange;
            }
            else {
                change = diff;
            }
            var newScroll = this.domScroll - change;
            window.scrollTo(0, newScroll);
            var changeScroll = void 0;
            if (offset > 0) {
                if (heightChange > offset) {
                    changeScroll = offset;
                }
                else {
                    changeScroll = heightChange;
                }
            }
        }
        this.domHeight = newHeight;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SermonsListComponent.prototype, "sermons", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SermonsListComponent.prototype, "filterValues", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SermonsListComponent.prototype, "lastChange", void 0);
    SermonsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-sermons-list',
            templateUrl: 'sermons-list.component.html',
            styleUrls: ['sermons-list.component.css'],
            pipes: [search_sermons_pipe_1.SearchSermons, angular2_moment_1.FromUnixPipe, angular2_moment_1.DateFormatPipe, ng2_pagination_1.PaginatePipe, array_pipe_1.Array, order_by_pipe_1.OrderBy],
            directives: [index_1.PaginationComponent],
            providers: [ng2_pagination_1.PaginationService]
        }), 
        __metadata('design:paramtypes', [audio_service_1.AudioService, core_1.ElementRef, global_events_service_1.GlobalEventsService])
    ], SermonsListComponent);
    return SermonsListComponent;
}());
exports.SermonsListComponent = SermonsListComponent;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-yf5H8foM.tmp/0/app/components/sermons-list/sermons-list.component.js.map