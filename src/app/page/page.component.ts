import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AfoObjectObservable } from 'angularfire2-offline';

import { ApiService } from '../core/api/api.service';
import { Page } from './page.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageSlug: string;
  page: AfoObjectObservable<Page>;
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
    this.pageSlug = this.activatedRoute.snapshot.params.type;
    this.page = this.apiService.page(this.pageSlug);
    this.filterChange++;
  }

}
