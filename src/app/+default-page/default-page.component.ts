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
  public preSermons;
  public sermons;
  private ready = false;
  private info;
  constructor(private curr: RouteSegment, public apiObservableService: ApiObservableService) {
    
  }

  ngOnInit() {
    this.sermons = [
      {
        "name": "Determination Amidst Distractions",
        "unix": 1465157458,
        "verse": "Nehemiah 6",
        "speaker": "Pastor Paul Phillipps",
        "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-06-05-pm.MP3",
        "meridian": "Evening",
        "slug": "determination-amidst-distractions",
        "key": '1999'
      },
      {
        "name": "Re-Minding Your Mind",
        "unix": 1465157372,
        "verse": "Philippians 4:8",
        "speaker": "Pastor Paul Phillipps",
        "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-06-05-am.MP3",
        "meridian": "Morning",
        "slug": "re-minding-your-mind",
        "key": 1998
      }
    ];
    this.preSermons = {
      "1999": {
          "name": "Determination Amidst Distractions",
          "unix": 1465157458,
          "verse": "Nehemiah 6",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-06-05-pm.MP3",
          "meridian": "Evening",
          "slug": "determination-amidst-distractions"
      },
      "1998": {
          "name": "Re-Minding Your Mind",
          "unix": 1465157372,
          "verse": "Philippians 4:8",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-06-05-am.MP3",
          "meridian": "Morning",
          "slug": "re-minding-your-mind"
      },
      "1995": {
          "name": "Turning Cares Into Prayers",
          "unix": 1464508011,
          "verse": "Philippians 4:6-7",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-05-29-am.MP3",
          "meridian": "Morning",
          "slug": "turning-cares-into-prayers"
      },
      "1957": {
          "name": "When Problems Come From Within",
          "unix": 1463328420,
          "verse": "Nehemiah 5",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-05-15-pm.MP3",
          "meridian": "Evening",
          "slug": "when-problems-come-from-within"
      },
      "1956": {
          "name": "Standing Firm Together",
          "unix": 1463328322,
          "verse": "Philippians 4:1-3",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-05-15-am.MP3",
          "meridian": "Morning",
          "slug": "standing-firm-together"
      },
      "1923": {
          "name": "The Best Is Yet To Come (Part 2 of 2)",
          "unix": 1462736368,
          "verse": "Philippians 3:20-21",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-05-08-am.MP3",
          "meridian": "Morning",
          "slug": "the-best-is-yet-to-come-part-1-of-2-2"
      },
      "1919": {
          "name": "The Best Is Yet To Come (Part 1 of 2)",
          "unix": 1462132858,
          "verse": "Philippians 3:20-21",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-05-01-am.MP3",
          "meridian": "Morning",
          "slug": "the-best-is-yet-to-come-part-1-of-2"
      },
      "1917": {
          "name": "The Power Of A Pattern",
          "unix": 1461521902,
          "verse": "Philippians 3:17-19",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-04-24-am.MP3",
          "meridian": "Morning",
          "slug": "the-power-of-a-pattern"
      },
      "1916": {
          "name": "When Opposition Arrives: Ten Truths About Trouble",
          "unix": 1460922355,
          "verse": "Nehemiah 4",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-04-17-pm.MP3",
          "meridian": "Evening",
          "slug": "when-opposition-arrives-ten-truths-about-trouble"
      },
      "1915": {
          "name": "Pressing On!",
          "unix": 1460922297,
          "verse": "Philippians 3:12-16",
          "speaker": "Pastor Paul Phillipps",
          "audio": "http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/files\/sermons\/audios\/2016-04-17-am.MP3",
          "meridian": "Morning",
          "slug": "pressing-on"
      }
    };
    
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
