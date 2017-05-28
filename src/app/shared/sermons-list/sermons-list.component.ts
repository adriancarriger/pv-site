import { Component, Input, OnInit } from '@angular/core';
import { PaginationInstance } from 'ng2-pagination';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-sermons-list',
  templateUrl: './sermons-list.component.html',
  styleUrls: ['./sermons-list.component.scss']
})
export class SermonsListComponent implements OnInit {
  @Input() sermons;
  @Input() filteredMeta;
  artClasses = [
    'adam',
    'bebas-kai',
    'love-moment'
  ];
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 25,
    currentPage: 1
  };
  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  artClass(index) {
    return this.artClasses[index % 3];
  }

}
