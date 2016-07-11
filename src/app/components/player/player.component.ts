import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderComponent } from '../slider/index';
import { AudioService } from '../../services/audio.service';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'as-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css'],
  directives: [SliderComponent, MODAL_DIRECTVES],
  viewProviders:[BS_VIEW_PROVIDERS]
})
export class PlayerComponent implements OnInit {
  @ViewChild('lgModal') lgModal;
  public modalOpen = false;
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

    this.audioService.modalStatus$.subscribe(data => {
      this.lgModal.show();
    });
  }

}
