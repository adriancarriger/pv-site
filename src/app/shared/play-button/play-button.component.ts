import { Component, Input } from '@angular/core';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent {
  @Input('sermonId') sermonId;
  constructor(public mediaService: MediaService) { }
}
