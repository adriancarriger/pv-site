import { Component, OnInit } from '@angular/core';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  position = 0;

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.time.subscribe(data => {
      this.position = Math.round(data['percentage']);
    });
  }
}
