/**
 * @module BooksModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link BooksComponent} view.
 * @consumers {@link BooksModule}, {@link BooksRoutingModule}
 */
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnDestroy, OnInit {
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
    this.filterSubscription = this.apiService.booksFilter.subscribe(options => {
      this.filteredMeta.searchFields = options['searchFields'];
    });
  }
}
