/**
 * @module HomeModule
 */ /** */
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule}, {@link HomeRoutingModule}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  using = ['Children', 'Youth', 'Young Adults', 'Women', 'Men', 'Family'];
  adItems = [];
  constructor(public apiService: ApiService) { }
  ngOnInit() {
    this.apiService.menu.subscribe(menuItems => {
      this.adItems = menuItems
        .find(item => item.name === 'Ministries').sub
        .reduce((previous, item) => {
          if (this.using.includes(item.name)) {
            previous.push(item);
          }
          return previous;
      }, []);
    });
  }
}
