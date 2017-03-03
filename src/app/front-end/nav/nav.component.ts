/**
 * @module CoreModule
 */ /** */
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api/api.service';
/**
 * @whatItDoes Returns the {@link NavComponent} view
 * @consumers {@link AppComponent}
 *
 * Shown at the top of each page.
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeItem: string;
  isCollapsed:  boolean;
  navOpen: boolean;
  test = 'asdf';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
