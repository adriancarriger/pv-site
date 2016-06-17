import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Nouislider } from 'ng2-nouislider';

@Component({
  moduleId: module.id,
  selector: 'as-slider',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
  directives: [Nouislider]
})
export class SliderComponent implements OnInit {
  @Input() position: number;
  @Output() seek = new EventEmitter();
  public lastInput;
  constructor() {}
  bubbleChange(event) {
    if (~~this.lastInput !== ~~this.position) {
      //console.log('update detected');
      this.seek.emit( this.position );
    }
    
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
      this.lastInput = changes.position.currentValue;
  }

}
