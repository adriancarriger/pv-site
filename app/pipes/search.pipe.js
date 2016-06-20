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
var Search = (function () {
    function Search() {
    }
    Search.prototype.transform = function (value, term, selectBox1, selectBox2, selectBox3) {
        if (value === undefined) {
            return;
        }
        ;
        if (term === undefined) {
            return value;
        }
        ;
        var queries = term.toLowerCase().split(' ');
        return value.filter(function (item) {
            var result = undefined;
            var str = item.name.toLowerCase();
            for (var i = 0; i < queries.length && result !== false; i++) {
                result = str.indexOf(queries[i]) > -1;
            }
            if (result) {
                return item;
            }
        });
    };
    Search = __decorate([
        core_1.Pipe({
            name: 'asSearch'
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-e8MYKqVq.tmp/0/app/pipes/search.pipe.js.map