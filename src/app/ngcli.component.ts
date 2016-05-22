import { Component, provide, ViewEncapsulation } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import {AuthService} from './services/auth.service';
import {FirebaseService} from './services/firebase.service';
import {NavbarComponent} from './navbar/index';
import {FooterComponent} from './footer/index';

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
    FirebaseService
  ],
})
@Routes([
  {path: '/home', component: HomeComponent}
])
export class NgcliAppComponent {
  title = 'ngcli works!';
}
