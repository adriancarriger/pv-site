import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { PaginationControlsCmp } from 'ng2-pagination';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'as-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css'],
  directives: [PaginationControlsCmp]
})
export class PaginationComponent {
  @Input() config;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  public page;
  public showAll = false;
  bubble(event) {
    this.pageChange.emit(event);
  }
  showAllPages() {
    this.showAll = true;
  }
}
