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
var router_1 = require('@angular/router');
var _home_1 = require('./+home');
var angular2_jwt_1 = require('angular2-jwt');
var http_1 = require('@angular/http');
var auth_service_1 = require('./services/auth.service');
var audio_service_1 = require('./services/audio.service');
var firebase_service_1 = require('./services/firebase.service');
var index_1 = require('./components/navbar/index');
var index_2 = require('./components/footer/index');
var index_3 = require('./components/player/index');
var _default_page_1 = require('./+default-page');
var _test_template_1 = require('./+test-template');
var search_params_service_1 = require('./services/search-params.service');
var global_events_service_1 = require('./services/global-events.service');
var preload_service_1 = require('./services/preload.service');
var api_observable_service_1 = require('./services/api-observable.service');
var _sermons_page_1 = require('./+sermons-page');
var AppComponent = (function () {
    function AppComponent(globalEventsService) {
        globalEventsService.init();
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [
                router_1.ROUTER_DIRECTIVES,
                index_1.NavbarComponent,
                index_2.FooterComponent,
                index_3.PlayerComponent
            ],
            providers: [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                }),
                auth_service_1.AuthService,
                firebase_service_1.FirebaseService,
                search_params_service_1.SearchParamsService,
                global_events_service_1.GlobalEventsService,
                preload_service_1.PreloadService,
                api_observable_service_1.ApiObservableService,
                audio_service_1.AudioService
            ],
        }),
        router_1.Routes([
            { path: '/', component: _home_1.HomeComponent },
            { path: '/resources/sermons', component: _sermons_page_1.SermonsPageComponent },
            { path: '/resources/:type', component: _test_template_1.TestTemplateComponent },
            { path: '/ministries/:type', component: _default_page_1.DefaultPageComponent },
            { path: '/outreaches/:type', component: _default_page_1.DefaultPageComponent },
            { path: '/about/:type', component: _test_template_1.TestTemplateComponent },
            { path: '/test-template', component: _test_template_1.TestTemplateComponent }
        ]), 
        __metadata('design:paramtypes', [global_events_service_1.GlobalEventsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map