import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
  slug: string;
  resourceType: string;
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
    public apiService: ApiService,
    private cd: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.onNewRoute();
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
    this.slug = this.activatedRoute.snapshot.params.type;
    this.resourceType = this.activatedRoute.data['value'].resourceType;
    this.page = this.apiService.resource(this.resourceType, this.slug);
    this.cd.markForCheck();
    // Update subscription
    this.ngOnDestroy();
    this.filterSubscription = this.page.subscribe((page: Page) => {
      if (!page.filter) { return; }
      this.filteredMeta.searchFields = page.filter.searchFields;
    });
    this.filterChange++;
  }

}
