import { Component, OnInit } from '@angular/core';
import { MeowComponent } from '../meow';
import { TestServiceService } from '../test-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-test-area',
  templateUrl: 'test-area.component.html',
  styleUrls: ['test-area.component.css'],
  directives: [MeowComponent]
})
export class TestAreaComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
