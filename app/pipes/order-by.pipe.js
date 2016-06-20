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
var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy._orderByComparator = function (a, b) {
        if (a === undefined) {
            return;
        }
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderBy.prototype.transform = function (input, config, special) {
        if (config === void 0) { config = '+'; }
        if (!Array.isArray(input)) {
            return input;
        }
        if (config === 'Special') {
            if (special === 'All books') {
                config = '-unix';
            }
            else {
                config = 'verse';
            }
        }
        var splitOn = /[\s:\s-]+/;
        if (config === 'verse') {
            var result = input.sort(function (a, b) {
                var x = a.verse.split(splitOn);
                var y = b.verse.split(splitOn);
                var sortLength = Math.min(x.length, y.length);
                for (var i = 0; i < sortLength; i++) {
                    if (x[i] !== y[i]) {
                        return x[i] - y[i];
                    }
                }
            });
            return result;
        }
        else if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+'
                    || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc_1
                        ? OrderBy._orderByComparator(a[property_1], b[property_1])
                        : -OrderBy._orderByComparator(a[property_1], b[property_1]);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    OrderBy = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderBy);
    return OrderBy;
}());
exports.OrderBy = OrderBy;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-OpBPmHPt.tmp/0/app/pipes/order-by.pipe.js.map