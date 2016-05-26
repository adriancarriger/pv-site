import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-meow',
  templateUrl: 'meow.component.html',
  styleUrls: ['meow.component.css']
})
export class MeowComponent implements OnInit {
  private pages = 'meow';
  constructor() {}

  ngOnInit() {
    this.pages = 'boring test';
  }

}
