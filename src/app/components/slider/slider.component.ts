import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnChanges } from '@angular/core';
import { Nouislider } from 'ng2-nouislider';

@Component({
  moduleId: module.id,
  selector: 'as-slider',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
  directives: [Nouislider]
})
export class SliderComponent implements OnChanges {
  @Input() position: number;
  @Output() seek = new EventEmitter();
  public lastInput;
  bubbleChange(event) {
    if (Math.floor(this.lastInput) !== Math.floor(this.position)) {
      this.seek.emit( this.position );
    }
  }
  ngOnChanges(changes) {
      this.lastInput = changes.position.currentValue;
  }

}
