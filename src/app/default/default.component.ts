import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../core/api/api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  filterData = { search: '' };
  filteredMeta = {
    searchFields: ['name'],
    wholeWords: true
  };
  searchMap = {
    college: 'decision plan',
    youth: 'children',
    awana: 'children serve service',
    vbs: 'children serve service',
    missions: 'evangelism witness',
    sunday: 'church',
    school: 'education',
    'rescue-mission': 'serve service evangelism witness',
    'operation-christmas-child': 'serve service evangelism witness',
    'christmas-tea': 'christmas serve service evangelism witness'
  };
  filterChange = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public apiService: ApiService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onNewRoute();
      }
    });
  }

  onNewRoute() {
    this.filterData.search = this.activatedRoute.snapshot.params.type;
    if (this.filterData.search in this.searchMap) {
      this.filterData.search = this.searchMap[this.filterData.search];
    }
    this.filterChange++;
  }

}
