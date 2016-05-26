import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-meow',
  providers: [TestServiceService],
  templateUrl: 'meow.component.html',
  styleUrls: ['meow.component.css']
})
export class MeowComponent implements OnInit {
  private pages = 'meow';
  constructor(private testService: TestServiceService) {}

  ngOnInit() {
    this.pages = 'boring test';
    this.testService.bob().subscribe(
      (data) => {
          console.log('blog data arrived', data);
          //this.blogs = data;
      },
      (error: Object) => {
          console.log('error!', error);
      }
    );
  }

}
