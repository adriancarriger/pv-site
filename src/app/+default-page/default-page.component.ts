import { Component, OnInit } from '@angular/core';
import { RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import { AppApiService } from '../services/app-api.service';
import { HeaderDefaultComponent } from '../components/header-default/index'

@Component({
  moduleId: module.id,
  selector: 'as-default-page',
  templateUrl: 'default-page.component.html',
  styleUrls: ['default-page.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderDefaultComponent],
  providers: [AppApiService]
})
export class DefaultPageComponent implements OnInit {
  public meowBobParentTest = 'bla bla meow bla Bob';
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
    }
  ];
  private ready = false;
  public info = 'just another test #2!';
  constructor(private curr: RouteSegment, public appApiService: AppApiService) {}
  ngOnInit(): Promise<any> {
    return this.appApiService.get({
      type: 'defaultPage',
      category: this.curr.urlSegments[0].segment,
      slug: this.curr.getParam('type')
    }).then(data => {
      this.info = data;
      this.ready = true;
    });
  }
}
