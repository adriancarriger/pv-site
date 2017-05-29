/**
 * @module EventsModule
 */ /** */
import { Component } from '@angular/core';

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
export class EventsComponent {
  constructor(public apiService: ApiService) { }
}
