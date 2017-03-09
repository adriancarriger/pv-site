import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent {
  @Input() config;
  @Input()
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  page;
  showAll = false;
  private _directionLinks = true;
  bubble(event) {
    this.pageChange.emit(event);
  }
  showAllPages() {
    this.showAll = true;
  }
}
