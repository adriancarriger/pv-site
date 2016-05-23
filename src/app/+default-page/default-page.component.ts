import { Component, OnInit } from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {AppApiService} from '../services/app-api.service';

@Component({
  moduleId: module.id,
  selector: 'default-page',
  templateUrl: 'default-page.component.html',
  styleUrls: ['default-page.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AppApiService]
})
export class DefaultPageComponent implements OnInit {
  private info;
  private testStudies = [
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
  private testEvents = [
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
  private sermons = [
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/8/16 AM',
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/1/16 AM',
      art: 'test-pattern-3.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Power Of A Pattern',
      speaker: 'Pastor Paul Phillipps',
      date: '4/24/16 AM',
      art: 'test-pattern-4.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'When Opposition Arrives: Ten Truths About Trouble',
      speaker: 'Pastor Paul Phillipps',
      date: '4/17/16 PM',
      art: 'test-pattern-5.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'Pressing On!',
      speaker: 'Pastor Paul Phillipps',
      date: '4/17/16 AM',
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'Man\'s Greatest Sin...It\'s Not What You Think',
      speaker: 'Pastor Paul Phillipps',
      date: '4/10/16 AM',
      art: 'test-pattern-3.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/8/16 AM',
      art: 'test-pattern-4.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/8/16 AM',
      art: 'test-pattern-5.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/8/16 AM',
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    }
  ];
  private ready = false;
  constructor(curr: RouteSegment, public appApiService: AppApiService) {
   appApiService.get({
     type: 'defaultPage',
     category: curr.getParam('category'),
     slug: curr.getParam('slug')
   }).then(data => {
     this.info = data;
     this.ready = true;
   });
  }
  
  ngOnInit() {}

}
