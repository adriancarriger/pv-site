import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-list',
  templateUrl: 'sermons-list.component.html',
  styleUrls: ['sermons-list.component.css']
})
export class SermonsListComponent {
  @Input() sermons;
}
