import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from '../api/api.service';

@Injectable()
export class MediaService {
  /**
   * Old shape
   */
  // current = {
  //   id: undefined,
  //   playing: false,
  //   init: false,
  //   title: '',
  //   speaker: '',
  //   duration: '',
  //   art: {},
  //   randomClass: ''
  // };

  audio = {};
  current: CurrentMedia = {};
  // Custom display data
  display = {
    playing: false,
    id: undefined
  };
  next = {
    pending: false,
    promise: undefined,
    id: undefined
  };

  constructor(private apiService: ApiService) {
    this.init();
  }

  init() {
    // Start with resolved promise
    this.next.promise = new Promise(r => r());
  }

  pause() {
    this.current.playing = false;
    this.display.playing = false;
    this.audio[this.current.id].pause();
  }

  play(id: number) {
    if (this.current.playing) { this.pause(); }

    this.current.id = id;
    this.current.playing = true;
    this.display.playing = true;

    // Setup audio if needed
    if (!(id in this.audio)) { this.setupAudio(id); }

    // Update current
    this.current.media = this.apiService.getSermon(id);

    // Play
    this.next.promise = this.audio[this.current.id].play();
  }

  toggle(id: number) {
    this.next.id = id;
    this.displayToggle(id);
    // Only wait for a Promise once before resolving
    if (!this.next.pending) {
      this.next.pending = true;
      this.next.promise.then(() => this.implementToggle());
    }
  }

  private displayToggle(newId) {
    this.display.playing = newId !== this.display.id || !this.display.playing;
    this.display.id = newId;
  }

  private implementToggle() {
    this.next.pending = false;
    const different = !this.audio[this.next.id] || this.next.id !== this.current.id;
    // Play if different or paused
    different || this.audio[this.current.id].paused ? this.play(this.next.id) : this.pause();
  }

  private setupAudio(id: number) {
    // Create audio object
    this.audio[id] = new Audio();
    // Subscribe to src
    this.apiService.getSermon(id).subscribe(sermon => this.audio[id].src = sermon['audio']);
  }

}

// WIP
export interface CurrentMedia {
  id?: number;
  media?: any;
  playing?: boolean;
};
