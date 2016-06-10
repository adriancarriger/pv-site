import { Component } from '@angular/core';
import { HeaderDefaultComponent } from '../components/header-default/index';
import { FilterDefaultComponent } from '../components/filter-default/index';
import { SermonsListComponent } from '../components/sermons-list/index';

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
export class SermonsPageComponent {
  public info = {
    image_small: tempImage,
    image_medium: tempImage,
    image_large: tempImage,
    image_x_large: tempImage,
    title: 'Sermons'
  };
  public sermons = [
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/8/16 AM',
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Best Is Yet To Come (Part 1 Of 2)',
      speaker: 'Pastor Paul Phillipps',
      date: '5/1/16 AM',
      art: 'test-pattern-3.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'The Power Of A Pattern',
      speaker: 'Pastor Paul Phillipps',
      date: '4/24/16 AM',
      art: 'test-pattern-4.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'When Opposition Arrives: Ten Truths About Trouble',
      speaker: 'Pastor Paul Phillipps',
      date: '4/17/16 PM',
      art: 'test-pattern-5.jpg',
      verse: '1 John 2:10'
    },
    {
      title: 'Pressing On!',
      speaker: 'Pastor Paul Phillipps',
      date: '4/17/16 AM',
      art: 'test-pattern.jpg',
      verse: '1 John 2:10'
    }
  ];

}
