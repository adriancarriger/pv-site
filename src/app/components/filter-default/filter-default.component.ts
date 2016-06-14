import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  Input,
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
  @Input() inputData;
  @Output() update = new EventEmitter();

  public outputData = {term: ''}
  public stuck = false;
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

    this.inputData.box1.unshift(this.inputData.defaults.box1);
    this.inputData.box2.unshift(this.inputData.defaults.box2);
    this.inputData.box3.unshift(this.inputData.defaults.box3);

    this.outputData['box1'] = this.inputData.defaults.box1;
    this.outputData['box2'] = this.inputData.defaults.box2;
    this.outputData['box3'] = this.inputData.defaults.box3;

    this.update.emit( this.outputData );
  }
  
  sendOutput(key, value) {
    this.outputData[key] = value;
    this.update.emit( this.outputData );
  }
  
}
