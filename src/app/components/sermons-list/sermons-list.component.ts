import { Component, Input } from '@angular/core';
import { Search } from '../../pipes/search.pipe';
import { FromUnixPipe, DateFormatPipe } from 'angular2-moment';
import { PaginationComponent } from '../pagination/index';
import { PaginatePipe, IPaginationInstance, PaginationService } from 'ng2-pagination';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-list',
  templateUrl: 'sermons-list.component.html',
  styleUrls: ['sermons-list.component.css'],
  pipes: [Search, FromUnixPipe, DateFormatPipe, PaginatePipe],
  directives: [PaginationComponent],
  providers: [PaginationService]
})
export class SermonsListComponent {
  @Input() sermons;
  @Input() term;
  public page;
  public config: IPaginationInstance = {
      id: 'custom',
      itemsPerPage: 25,
      currentPage: 1
  };
}
