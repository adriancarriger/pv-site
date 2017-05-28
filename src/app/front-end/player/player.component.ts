import { Component, OnInit } from '@angular/core';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  position = {
    time: '0:23',
    percentage: 3
  };
  current = {
    init: true,
    playing: false,
    duration: '52:29',
    title: 'Mock title',
    speaker: 'Mock speaker',
    art: {
      image_small: 'http://pvbiblechurch.com/wp-content/uploads/mp/image-cache/site/9/16.ef5cd52674d33a18a0c599df8e78572d.png'
    }
  };
  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

}
