import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ApiObservableService } from '../services/api-observable.service';
import { HeaderDefaultComponent } from '../components/header-default/index';
import { SermonsListComponent } from '../components/sermons-list/index';

@Component({
  moduleId: module.id,
  selector: 'as-default-page',
  templateUrl: 'default-page.component.html',
  styleUrls: ['default-page.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderDefaultComponent,
    SermonsListComponent
  ]
})
export class DefaultPageComponent implements OnInit {
  public testStudies = [
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: true
    },
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: false
    },
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: false
    },
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: false
    }
  ];
  public testEvents = [
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: true
    },
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: false
    },
    {
      name: 'Old Testimate',
      time : 'Wed at 3:30pm',
      location: 'PV Bible Church',
      extra: 'Childcare available',
      learn: false
    }
  ];
  public sermons;
  public tempSlug;
  private ready = false;
  private info;
  constructor(
    public activatedRoute: ActivatedRoute,
    public apiObservableService: ApiObservableService) {

  }

  ngOnInit() {
    this.apiObservableService.sermons$
    .subscribe(data => {
      this.sermons =  Object.keys(data).map(function(key) {
        let pair = {
          key: undefined
        };
        pair = data[key];
        pair.key = key;
        return pair;
      });
    });
    this.apiObservableService.loadSermons(true);

    this.apiObservableService.observe({
      type: 'defaultPage',
      category: this.activatedRoute.snapshot.url[0].path,
      slug: this.activatedRoute.snapshot.url[1].path
    })
    .subscribe(data => {
      this.info = data;
      this.ready = true;
      // Temp
      let titleArray = this.info.title.split( "'" );
      this.tempSlug = titleArray[0];
      // End Temp
    });

  }


}
