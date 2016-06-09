import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'as-header-default',
  templateUrl: 'header-default.component.html',
  styleUrls: ['header-default.component.css']
})
export class HeaderDefaultComponent {
  @Input() info;
  length(object) {
    return object.length;
  }
}
