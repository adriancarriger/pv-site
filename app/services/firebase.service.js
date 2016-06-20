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
var config_1 = require('../config');
var FIREBASE_TESTS = config_1.FIREBASE_ROOT + "/tests";
var FirebaseService = (function () {
    function FirebaseService() {
        this.rootRef = new Firebase(config_1.FIREBASE_ROOT);
        this.testsRef = new Firebase(FIREBASE_TESTS);
    }
    // Firebase Custom Authentication - https://www.firebase.com/docs/web/guide/login/custom.html
    FirebaseService.prototype.auth = function (token) {
        this.rootRef.authWithCustomToken(token, function (error, authData) {
            if (error) {
                console.log('Login Failed!', error);
            }
            else {
                localStorage.setItem('uid', authData.uid);
            }
        });
    };
    // Test Examples
    FirebaseService.prototype.getMyTest = function () {
        if (localStorage.getItem('uid') !== null) {
            var meow = this.testsRef.child(localStorage.getItem('uid'));
            meow.on('value', function (snapshot) {
                console.log(snapshot.val());
            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });
        }
        else {
        }
    };
    FirebaseService.prototype.setMyWriteTest = function () {
        var meow = this.testsRef.child(localStorage.getItem('uid'));
        meow.set('meow-set!');
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map