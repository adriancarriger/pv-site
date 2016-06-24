import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PageScroll} from 'ng2-page-scroll';

@Component({
  moduleId: module.id,
  selector: 'as-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [],
  directives: [
    ROUTER_DIRECTIVES,
    PageScroll
  ]
})
export class HomeComponent {}
