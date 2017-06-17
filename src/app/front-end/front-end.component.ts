/**
 * @module FrontEndModule
 */ /** */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { RefTaggerService } from '../core/ref-tagger/ref-tagger.service';
/**
 * @whatItDoes Returns the {@link FrontEndComponent} view.
 * @consumers {@link FrontEndModule}, {@link FrontEndRoutingModule}
 */
@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {
  constructor(
    private router: Router,
    private refTaggerService: RefTaggerService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.refTaggerService.tag(), 300);
      }
    });
  }
}
