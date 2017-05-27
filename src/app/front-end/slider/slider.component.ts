import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slider.component.scss']
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
