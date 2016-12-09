/**
 * @module SermonsModule
 */ /** */
import { Component, OnInit } from '@angular/core';
/**
 * @whatItDoes Returns the {@link SermonsComponent} view.
 * @consumers {@link SermonsModule},  {@link SermonsRoutingModule}
 */
@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
