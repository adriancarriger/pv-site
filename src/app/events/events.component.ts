/**
 * @module EventsModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link EventsComponent} view.
 * @consumers {@link EventsModule}, {@link EventsRoutingModule}
 */
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnDestroy, OnInit {
  /**
   * Timestamp of the last change made by the filter data.
   *
   * This is needed to trigger the {@link filterPipe}.
   */
  filterChange: number;
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
    flatten: true,
    count: 0,
    current: 'unixEnd'
  };
  /**
   * Holds the subscription the to {@link apiService}'s filterOptions Observable
   */
  filterSubscription: Subscription;
  constructor(
    public apiService: ApiService) { }
  /**
   * Unsubscribes from the {@link filterSubscription} to prevent memeory leaks.
   */
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
  ngOnInit() {
    this.filterSubscription = this.apiService.eventsFilter.subscribe(options => {
      this.filteredMeta.searchFields = options['searchFields'];
    });
  }
}
