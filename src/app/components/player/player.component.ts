import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/index';
import { AudioService } from '../../services/audio.service';

@Component({
  moduleId: module.id,
  selector: 'as-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css'],
  directives: [SliderComponent]
})
export class PlayerComponent implements OnInit {
  public current;
  public position;
  public playing = false;
  constructor(public audioService: AudioService) {}

  ngOnInit() {

    this.audioService.currentAudio$.subscribe(data => {
      this.current = data;
    });

    this.audioService.audioPosition$.subscribe(data => {
      this.position = data;
    });
  }
}
