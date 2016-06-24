import { Component, provide, ViewEncapsulation } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HomeComponent } from './+home';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import {AuthService} from './services/auth.service';
import {AudioService} from './services/audio.service';
import {FirebaseService} from './services/firebase.service';
import {NavbarComponent} from './components/navbar/index';
import {FooterComponent} from './components/footer/index';
import {PlayerComponent} from './components/player/index';
import { DefaultPageComponent } from './+default-page';
import { TestTemplateComponent } from './+test-template';
import { SearchParamsService } from './services/search-params.service';
import { GlobalEventsService } from './services/global-events.service';
import { PreloadService } from './services/preload.service';
import { ApiObservableService } from './services/api-observable.service';
import { SermonsPageComponent } from './+sermons-page';

@Component({
  moduleId: module.id,
  selector: 'app-root',
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
    ROUTER_PROVIDERS,
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
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/resources/sermons', component: SermonsPageComponent},
  {path: '/resources/:type', component: TestTemplateComponent},
  {path: '/ministries/:type', component: DefaultPageComponent},
  {path: '/outreaches/:type', component: DefaultPageComponent},
  {path: '/about/:type', component: TestTemplateComponent},
  {path: '/test-template', component: TestTemplateComponent}
])
export class AppComponent {
  constructor(globalEventsService: GlobalEventsService) {
    globalEventsService.init();
  }
}
