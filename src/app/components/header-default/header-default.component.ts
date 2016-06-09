import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'as-header-default',
  templateUrl: 'header-default.component.html',
  styleUrls: ['header-default.component.css'],
  inputs: ['info']
})
export class HeaderDefaultComponent implements OnInit {
  public info;
  constructor() {}
  ngOnInit() {}
  length(object) {
    return object.length;
  }
}
