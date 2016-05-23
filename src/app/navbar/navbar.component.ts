import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES, CollapseDirective} from 'ng2-bootstrap';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AppApiService} from '../services/app-api.service';

@Component({
  moduleId: module.id,
  selector: 'as-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [DROPDOWN_DIRECTIVES, CollapseDirective, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [AppApiService]
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean;
  private pages = false;
  public hasX(obj, X) {
    if (X in obj) {
      return true;
    }
  }

  constructor(public appApiService: AppApiService) {}
  ngOnInit() {
    this.isCollapsed = true;
    this.appApiService.get({type: 'menu'})
    .then(data => {
      this.pages = data;
    });
  }

}
