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
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/Rx');
var http_1 = require('@angular/http');
var firebase_service_1 = require('./firebase.service');
var AuthService = (function () {
    function AuthService(http, fb) {
        this.http = http;
        this.fb = fb;
        this.lock = new Auth0Lock('ZoikOBvoT8pxABEwEh90HrAuTeBwSpdh', 'adriancarriger.auth0.com');
        this.auth0 = new Auth0({
            domain: 'adriancarriger.auth0.com',
            clientID: 'ZoikOBvoT8pxABEwEh90HrAuTeBwSpdh'
        });
    }
    AuthService.prototype.login = function () {
        var _this = this;
        var options = { 'rememberLastLogin': false, 'socialBigButtons': true, 'gravatar': false };
        this.lock.show(options, function (err, profile, token, accessToken, state, refreshToken) {
            if (err) {
                alert(err);
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', token);
            // Get Firebase delegation token
            var delOptions = {
                id_token: token,
                api: 'firebase',
                'scope': 'openid profile'
            };
            _this.auth0.getDelegationToken(delOptions, function (delegationErr, delegationResult) {
                localStorage.setItem('fbToken', delegationResult.id_token);
                // Call Firebase custom authentication
                _this.fb.auth(delegationResult.id_token);
            });
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, firebase_service_1.FirebaseService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-uDhfkUoW.tmp/0/app/services/auth.service.js.map