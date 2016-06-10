import { Component, provide, ViewEncapsulation } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HomeComponent } from './+home';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import {AuthService} from './services/auth.service';
import {FirebaseService} from './services/firebase.service';
import {NavbarComponent} from './components/navbar/index';
import {FooterComponent} from './components/footer/index';
import { DefaultPageComponent } from './+default-page';
import { TestTemplateComponent } from './+test-template';
import { SearchParamsService } from './services/search-params.service';
import { GlobalEventsService } from './services/global-events.service';
import { SermonsPageComponent } from './+sermons-page';


@Component({
  moduleId: module.id,
  selector: 'as-ngcli-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'ngcli.component.html',
  styleUrls: ['ngcli.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    FooterComponent
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
    GlobalEventsService
  ],
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/resources/sermons', component: SermonsPageComponent},
  {path: '/resources/:type', component: DefaultPageComponent},
  {path: '/ministries/:type', component: DefaultPageComponent},
  {path: '/outreaches/:type', component: DefaultPageComponent},
  {path: '/about/:type', component: DefaultPageComponent},
  {path: '/test-template', component: TestTemplateComponent}
])
export class NgcliAppComponent {
  constructor(globalEventsService: GlobalEventsService) {
    globalEventsService.init();
  }
}
