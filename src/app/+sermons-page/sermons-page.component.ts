import { Component, OnInit } from '@angular/core';
import { HeaderDefaultComponent } from '../components/header-default/index';
import { FilterDefaultComponent } from '../components/filter-default/index';
import { SermonsListComponent } from '../components/sermons-list/index';
import { ApiObservableService } from '../services/api-observable.service';

let tempImage = // Will connect to api soon 
  'http://pvbiblechurch.com/wp-content' + // Avoid max line length (temp)
  '/uploads/mp/image-cache/site/8' +
  '/ipod-headphones-1920x1080.414acded74a4af3f514ff36e41045e5b.jpg';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-page',
  templateUrl: 'sermons-page.component.html',
  styleUrls: ['sermons-page.component.css'],
  directives: [
    HeaderDefaultComponent,
    FilterDefaultComponent,
    SermonsListComponent
  ]
})
export class SermonsPageComponent implements OnInit {
  public info = {
    image_small: tempImage,
    image_medium: tempImage,
    image_large: tempImage,
    image_x_large: tempImage,
    title: 'Sermons'
  };
  public filterInfo = {
    defaults: {
      box1: 'All books',
      box2: 'All years',
      box3: 'AM/PM'
    },
    box1: [
      'Genesis',         'Exodus',          'Leviticus',     'Numbers',
      'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
      '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
      '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
      'Esther',          'Job',             'Psalm',         'Proverbs',
      'Ecclesiastes',    'Song of Solomon', 'Isaiah',        'Jeremiah',
      'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
      'Joel',            'Amos',            'Obadiah',       'Jonah',
      'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
      'Haggai',          'Zechariah',       'Malachi',       'Matthew',
      'Mark',            'Luke',            'John',          'Acts',
      'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
      'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians',
      '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
      'Philemon',        'Hebrews',         'James',         '1 Peter',
      '2 Peter',         '1 John',          '2 John',        '3 John',
      'Jude',            'Revelation',      'Selected Scriptures'
    ],
    box2: [
      '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008',
      '2007', '2006', '2005', '2004'
    ],
    box3: ['AM', 'PM']
  };
  public sermons;
  public lastChange;

  constructor(public apiObservableService: ApiObservableService) {

  }

  ngOnInit() {
    this.apiObservableService.sermons$
    .subscribe(data => {
      this.sermons =  Object.keys(data).map(function(key) {
        let pair = {};
        pair = data[key];
        pair["key"] = key;
        return pair;
      });
    });
    this.apiObservableService.loadSermons(true);

    this.apiObservableService.observe({
      type: 'sermon-books'
    })
    .subscribe(data => {
      console.log(data);
      this.filterInfo.box1 = data;
    });


  }

  updateChange() {
    this.lastChange = new Date().getTime();
  }

}
