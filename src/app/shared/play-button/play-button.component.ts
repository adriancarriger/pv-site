import { Component, OnInit } from '@angular/core';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

}
