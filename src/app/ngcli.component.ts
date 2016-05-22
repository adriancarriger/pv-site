import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'as-ngcli-app',
  templateUrl: 'ngcli.component.html',
  styleUrls: ['ngcli.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent}
])
export class NgcliAppComponent {
  title = 'ngcli works!';
}
