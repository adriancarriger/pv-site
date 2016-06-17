import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import { SearchSermons } from '../../pipes/search-sermons.pipe';
import { Array } from '../../pipes/array.pipe';
import { FromUnixPipe, DateFormatPipe } from 'angular2-moment';
import { PaginationComponent } from '../pagination/index';
import { PaginatePipe, IPaginationInstance, PaginationService } from 'ng2-pagination';
import { AudioService } from '../../services/audio.service';
import { OrderBy } from '../../pipes/order-by.pipe';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-list',
  templateUrl: 'sermons-list.component.html',
  styleUrls: ['sermons-list.component.css'],
  pipes: [SearchSermons, FromUnixPipe, DateFormatPipe, PaginatePipe, Array, OrderBy],
  directives: [PaginationComponent],
  providers: [PaginationService]
})
export class SermonsListComponent implements OnChanges {
  @Input() sermons;
  @Input() filterValues;
  @Input() lastChange;
  public page;
  public current;
  public domHeight;
  public config: IPaginationInstance = {
      id: 'custom',
      itemsPerPage: 25,
      currentPage: 1
  };
  constructor(public audioService: AudioService, public element: ElementRef) {
    this.audioService.currentAudio$.subscribe(data => {
      this.current = data;
    });
  }
  ngOnChanges(changes) {
      //console.log(this.element.nativeElement.firstChild.offsetHeight);
  }

}
