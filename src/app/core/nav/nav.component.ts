/**
 * @module CoreModule
 */ /** */
import { Component, OnInit } from '@angular/core';
/**
 * @whatItDoes Returns the {@link NavComponent} view
 * @consumers {@link AppComponent}
 * 
 * Shown at the top of each page.
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
