/**
 * @module SermonsModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link SermonsComponent} view.
 * @consumers {@link SermonsModule},  {@link SermonsRoutingModule}
 */
@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnDestroy, OnInit {
  /**
   * Data that is bound to the filter pipe. It can pass through filter data and get back data
   * that tells how many results were found after filtering.
   */
  filteredMeta = {
    searchFields: []
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
    this.filterSubscription = this.apiService.filterOptions.subscribe(options => {
      this.filteredMeta.searchFields = options['searchFields'];
    });
  }
}
