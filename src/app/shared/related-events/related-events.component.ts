import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-related-events',
  templateUrl: './related-events.component.html',
  styleUrls: ['./related-events.component.scss']
})
export class RelatedEventsComponent implements OnChanges {
  @Input() searchTerm;
  filterData = { search: '' };
  filteredMeta = {
    searchFields: ['ministries'],
    wholeWords: true,
    flatten: true,
    count: null
  };
  searchMap = {
    family: 'churchwide',
  };
  filterChange = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    public apiService: ApiService) { }

  ngOnChanges() {
    console.log(this.searchTerm);
    if (this.searchTerm in this.searchMap) {
      this.filterData.search = this.searchMap[this.searchTerm];
    } else {
      this.filterData.search = this.searchTerm;
    }
    this.filterChange++;
    setTimeout(() => this.cd.markForCheck());
  }

}
