import { Component, OnInit } from '@angular/core';
import { RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
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
  ],
  providers: [ApiObservableService]
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
  public sermons = [
    {
      name: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      unix: 1465882899,
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    },
    {
      name: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      unix: 1465882899,
      art: 'test-pattern-3.jpg',
      verse: '1 John 2:10'
    },
    {
      name: 'The Power Of A Pattern',
      speaker: 'Pastor Paul Phillipps',
      unix: 1465882899,
      art: 'test-pattern-4.jpg',
      verse: '1 John 2:10'
    },
    {
      name: 'When Opposition Arrives: Ten Truths About Trouble',
      speaker: 'Pastor Paul Phillipps',
      unix: 1465882899,
      art: 'test-pattern-5.jpg',
      verse: '1 John 2:10'
    },
    {
      name: 'Pressing On!',
      speaker: 'Pastor Paul Phillipps',
      unix: 1465882899,
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    }
  ];
  private ready = false;
  private info;
  constructor(private curr: RouteSegment, public apiObservableService: ApiObservableService) {}

  ngOnInit() {
    return this.apiObservableService.observe({
      type: 'defaultPage',
      category: this.curr.urlSegments[0].segment,
      slug: this.curr.getParam('type')
    })
    .subscribe(data => {
      this.info = data;
      this.ready = true;
    });
  }


}
