/**
 * @module CoreModule
 */ /** */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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
    private cd: ChangeDetectorRef,
    public mediaService: MediaService) { }

  ngOnInit() {
    Observable.fromEvent(window, 'scroll')
      .subscribe(() => {
        const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        if (width > 767) {
          this.navOpen = false;
          this.activeItem = undefined;
          this.cd.markForCheck();
        }
      });
  }

  scrollUp() {
    window.scroll(0, 0);
  }
}
