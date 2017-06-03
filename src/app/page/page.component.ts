import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AfoObjectObservable } from 'angularfire2-offline';

import { ApiService } from '../core/api/api.service';
import { Page } from './page.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnDestroy, OnInit {
  pageSlug: string;
  page: AfoObjectObservable<Page>;



  /**
   * Timestamp of the last change made by the filter data.
   *
   * This is needed to trigger the {@link filterPipe}.
   */
  filterChange = 0;
  /**
   * Data used to filter - passed to to the {@link filterPipe}
   */
  filterData;
  /**
   * Data that is bound to the filter pipe. It can pass through filter data and get back data
   * that tells how many results were found after filtering.
   */
  filteredMeta = {
    searchFields: [],
    count: 0
  };
  /**
   * Holds the subscription the to {@link apiService}'s filterOptions Observable
   */
  filterSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public apiService: ApiService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onNewRoute();
      }
    });
  }

  ngOnDestroy() {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  onNewRoute() {
    this.pageSlug = this.activatedRoute.snapshot.params.type;
    this.page = this.apiService.page(this.pageSlug);
    // Update subscription
    this.ngOnDestroy();
    this.filterSubscription = this.page.subscribe((page: Page) => {
      if (!page.filter) { return; }
      this.filteredMeta.searchFields = page.filter.searchFields;
    });
    this.filterChange++;
  }

}
