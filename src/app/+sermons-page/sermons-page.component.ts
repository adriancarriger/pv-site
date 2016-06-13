import { Component, OnInit } from '@angular/core';
import { HeaderDefaultComponent } from '../components/header-default/index';
import { FilterDefaultComponent } from '../components/filter-default/index';
import { SermonsListComponent } from '../components/sermons-list/index';
import { ApiObservableService } from '../services/api-observable.service';

let tempImage = // Will connect to api soon 
  'http://pvbiblechurch.com/wp-content' + // Avoid max line length (temp)
  '/uploads/mp/image-cache/site/8' +
  '/ipod-headphones-1920x1080.414acded74a4af3f514ff36e41045e5b.jpg';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-page',
  templateUrl: 'sermons-page.component.html',
  styleUrls: ['sermons-page.component.css'],
  directives: [
    HeaderDefaultComponent,
    FilterDefaultComponent,
    SermonsListComponent
  ]
})
export class SermonsPageComponent implements OnInit {
  public info = {
    image_small: tempImage,
    image_medium: tempImage,
    image_large: tempImage,
    image_x_large: tempImage,
    title: 'Sermons'
  };
  public sermons;

  constructor(public apiObservableService: ApiObservableService) {

  }

  ngOnInit() {
    this.apiObservableService.sermons$
    .subscribe(data => {
      this.sermons = data;
    });
    this.apiObservableService.loadSermons(true);
  }

}
