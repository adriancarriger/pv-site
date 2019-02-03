/**
 * @module CalendarModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link CalendarComponent} view.
 * @consumers {@link CalendarModule}, {@link CalendarRoutingModule}
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnDestroy, OnInit {
  image: string;
  /**
   * Holds the subscription the to {@link apiService}'s filterOptions Observable
   */
  subscription: Subscription;
  // showCalendar = false;
  constructor(public apiService: ApiService) {}
  /**
   * Unsubscribes from the {@link subscription} to prevent memeory leaks.
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.apiService.calendar.subscribe(data => {
      this.image = data.image_large;
    });
  }
}
