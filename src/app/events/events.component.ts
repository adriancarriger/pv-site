/**
 * @module EventsModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link EventsComponent} view.
 * @consumers {@link EventsModule}, {@link EventsRoutingModule}
 */
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent { }
