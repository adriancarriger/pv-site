import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  @Input() events;
  @Input() filteredMeta;
  @Input() hideNoResults;
}
