import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() position: number;
  @Output() change = new EventEmitter();
}
