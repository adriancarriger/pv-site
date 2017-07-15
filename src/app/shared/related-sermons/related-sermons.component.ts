import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-related-sermons',
  templateUrl: './related-sermons.component.html',
  styleUrls: ['./related-sermons.component.scss']
})
export class RelatedSermonsComponent implements OnChanges {
  @Input() searchTerm;
  filterData = { search: '' };
  filteredMeta = {
    searchFields: ['name'],
    wholeWords: true
  };
  searchMap = {
    'young-adults': 'decision plan',
    youth: 'children',
    awana: 'children serve service',
    vbs: 'children serve service',
    missions: 'evangelism witness',
    sunday: 'church',
    school: 'education',
    men: 'men leadership leaders checklist',
    'rescue-mission': 'serve service evangelism witness',
    'operation-christmas-child': 'serve service evangelism witness',
    'christmas-tea': 'christmas serve service evangelism witness'
  };
  filterChange = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public apiService: ApiService) { }

  ngOnChanges() {
    if (this.searchTerm in this.searchMap) {
      this.filterData.search = this.searchMap[this.searchTerm];
    } else {
      this.filterData.search = this.searchTerm;
    }
    this.filterChange++;
  }

}
