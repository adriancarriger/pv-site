import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons-list',
  templateUrl: './sermons-list.component.html',
  styleUrls: ['./sermons-list.component.scss']
})
export class SermonsListComponent implements OnInit {
  @Input() sermons;
  constructor() { }

  ngOnInit() {
  }

}
