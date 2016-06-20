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
var moment = require('moment');
var momentConstructor = moment.default || moment;
var SearchSermons = (function () {
    function SearchSermons() {
    }
    SearchSermons.prototype.transform = function (value, term, book, year, amPm, meowTest) {
        var books = [], years = [], meridian, queries = [], meridians = { AM: 'Morning', PM: 'Evening' };
        if (value === undefined) {
            return;
        }
        ;
        if (term === null || term === undefined) {
            return value;
        }
        if (term.length) {
            queries = term.toLowerCase().split(' ');
        }
        if (book !== undefined && book !== 'All books') {
            books.push(book);
        }
        if (year !== undefined && year !== 'All years') {
            years.push(year);
        }
        if (amPm !== undefined && amPm !== 'AM/PM') {
            meridian = meridians[amPm];
        }
        var artClasses = [
            'adam',
            'bebas-kai',
            'love-moment'
        ];
        var filtered = value.filter(function (item) {
            // Filter out sermons missing audio
            if (!item.audio) {
                return false;
            }
            // Merdian
            if (meridian !== undefined && meridian !== item.meridian) {
                return false;
            }
            // Book filter
            var sermonVerse = item.verse;
            for (var i_1 = 0; i_1 < books.length; i_1++) {
                if (sermonVerse.indexOf(books[i_1]) === -1) {
                    return false;
                }
            }
            // Year filter
            var sermonMoment = moment.unix(item.unix);
            var sermonYear = sermonMoment.format('YYYY');
            var sermonDate = sermonMoment.format('M/D/YY');
            for (var i_2 = 0; i_2 < years.length; i_2++) {
                if (sermonYear.indexOf(years[i_2]) === -1) {
                    return false;
                }
            }
            // Search terms
            if (term.length) {
                var speaker = (item.speaker).replace('Pastor ', '');
                var str = (item.name + ' ' +
                    sermonVerse + ' ' +
                    sermonYear + ' ' +
                    sermonDate + ' ' +
                    speaker).toLowerCase();
                for (var i_3 = 0; i_3 < queries.length; i_3++) {
                    if (str.indexOf(queries[i_3]) === -1) {
                        return false;
                    }
                }
            }
            var i = Math.floor(Math.random() * 3);
            item.randomClass = artClasses[i];
            return item;
        });
        meowTest.count = filtered.length;
        return filtered;
    };
    SearchSermons = __decorate([
        core_1.Pipe({
            name: 'asSearchSermons'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchSermons);
    return SearchSermons;
}());
exports.SearchSermons = SearchSermons;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-JUi8mYWH.tmp/0/app/pipes/search-sermons.pipe.js.map