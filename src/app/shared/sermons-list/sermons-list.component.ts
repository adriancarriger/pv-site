import { Component, Input, OnInit } from '@angular/core';
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'app-sermons-list',
  templateUrl: './sermons-list.component.html',
  styleUrls: ['./sermons-list.component.scss']
})
export class SermonsListComponent implements OnInit {
  @Input() sermons;
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
  constructor() { }

  ngOnInit() {
  }

  artClass(index) {
    return this.artClasses[index % 3];
  }

}
