import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter } from '@angular/core';
import { GlobalEventsService } from '../../services/global-events.service';
import {SELECT_DIRECTIVES} from 'ng2-select';

@Component({
  moduleId: module.id,
  selector: 'as-filter-default',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'filter-default.component.html',
  styleUrls: ['filter-default.component.css'],
  directives: [SELECT_DIRECTIVES]
})
export class FilterDefaultComponent implements OnInit {
  @Output() update = new EventEmitter();
  public items: Array<string> = ['AM/PM', 'AM', 'PM'];
  public books: Array<string> = [
    'All books',
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
    'Jude',            'Revelation'
  ];
  public years: Array<string> = [
    'All years',
    '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008',
    '2007', '2006', '2005', '2004', '2003', '2002', '2001'
  ];
  public stuck = false;
  public status: {isopen: boolean} = {isopen: false}; // ng2-bootstrap
  private value: any = {};
  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }
  public refreshValue(value: any): void {
    this.value = value;
  }
  constructor(private globalEventsService: GlobalEventsService, public element: ElementRef) {}
  ngOnInit() {
    let el = this.element.nativeElement;
    let filterOffset = el.firstChild.offsetTop;
    let navHeight = document.getElementById('navbar').offsetHeight;
    let stickyPoint = filterOffset - navHeight;
    this.globalEventsService.scroll$.subscribe(data => {
      let yPos = data.path[1].pageYOffset;
      this.stuck = yPos >= stickyPoint;
    });
    this.update.emit('');
  }
}
