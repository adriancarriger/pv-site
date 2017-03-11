import { Component, EventEmitter, Input, Output, ViewEncapsulation  } from '@angular/core';

import { PaginationControlsDirective } from 'ng2-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent {
  @Input() config;
  p: PaginationControlsDirective;
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
