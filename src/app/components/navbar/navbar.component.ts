import { Component, OnInit } from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';
import {CollapseDirective} from '../../temp-forks/collapse.directive';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ApiObservableService} from '../../services/api-observable.service';
import {PvLogoComponent} from '../pv-logo/index';
import { GlobalEventsService } from '../../services/global-events.service';
import { AudioService } from '../../services/audio.service';

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
  public current;
  private pages = false;
  public hasX(obj, X) {
    if (X in obj) {
      return true;
    }
  }

  constructor(
    private globalEventsService: GlobalEventsService,
    public apiObservableService: ApiObservableService,
    public audioService: AudioService) {}

  ngOnInit() {
    this.isCollapsed = true;
    this.apiObservableService.observe({type: 'menu'})
    .subscribe(data => {
      this.pages = data;
    });
    this.globalEventsService.resize$.subscribe(data => {
      this.isCollapsed = true;
    });
    this.audioService.currentAudio$.subscribe(data => {
      this.current = data;
    });
    

  }

}
