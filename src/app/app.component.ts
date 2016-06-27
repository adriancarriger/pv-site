import { Component, provide, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import {AuthService} from './services/auth.service';
import {AudioService} from './services/audio.service';
import {FirebaseService} from './services/firebase.service';
import {NavbarComponent} from './components/navbar/index';
import {FooterComponent} from './components/footer/index';
import {PlayerComponent} from './components/player/index';
import { SearchParamsService } from './services/search-params.service';
import { GlobalEventsService } from './services/global-events.service';
import { PreloadService } from './services/preload.service';
import { ApiObservableService } from './services/api-observable.service';

@Component({
  moduleId: module.id,
  selector: 'as-app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    FooterComponent,
    PlayerComponent
  ],
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }),
    AuthService,
    FirebaseService,
    SearchParamsService,
    GlobalEventsService,
    PreloadService,
    ApiObservableService,
    AudioService
  ],
})
export class AppComponent {
  constructor(globalEventsService: GlobalEventsService) {
    globalEventsService.init();
  }
}
