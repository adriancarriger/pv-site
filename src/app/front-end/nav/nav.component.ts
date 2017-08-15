/**
 * @module CoreModule
 */ /** */
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api/api.service';
import { MediaService } from '../../core/media/media.service';
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
  navOpen = false;
  constructor(
    public apiService: ApiService,
    public mediaService: MediaService) { }

  ngOnInit() {
  }

  scrollUp() {
    window.scroll(0, 0);
  }
}
