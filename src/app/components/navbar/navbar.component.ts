import { Component, OnInit } from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';
import {CollapseDirective} from '../../temp-forks/collapse.directive';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ApiObservableService} from '../../services/api-observable.service';
import {PvLogoComponent} from '../pv-logo/index';

@Component({
  moduleId: module.id,
  selector: 'as-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [
    DROPDOWN_DIRECTIVES,
    CollapseDirective,
    ROUTER_DIRECTIVES,
    PvLogoComponent
  ],
  providers: [ApiObservableService]
})
export class NavbarComponent implements OnInit {
  public stickyNav = true;
  public isCollapsed: boolean;
  private pages = false;
  public hasX(obj, X) {
    if (X in obj) {
      return true;
    }
  }

  constructor(public apiObservableService: ApiObservableService) {}

  ngOnInit() {
    this.isCollapsed = true;
    return this.apiObservableService.observe({type: 'menu'})
    .subscribe(data => {
      this.pages = data;
    });
  }

}
