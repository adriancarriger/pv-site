import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { ApiService } from '../api/api.service';

@Injectable()
export class MediaService {
  audio = {};
  current: CurrentMedia = {};
  // Custom display data
  display: Display = {
    playing: false,
    id: undefined,
    title: undefined,
    speaker: undefined,
    duration: undefined,
    art: undefined
  };
  time: ReplaySubject<Object>;
  next = {
    pending: false,
    promise: undefined,
    id: undefined
  };
  private sub = {
    sermon: undefined,
    audio: undefined
  };

  constructor(private apiService: ApiService) {
    this.onInit();
  }

  onInit() {
    // Start with resolved promise
    this.next.promise = new Promise(r => r());
    this.time = new ReplaySubject();
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

    // Subscribe to audio updates
    this.sub.audio = Observable
      .fromEvent(this.audio[this.current.id], 'timeupdate')
      .subscribe((event: Event) => this.onTimeUpdate());

    // Play
    this.next.promise = this.audio[this.current.id].play();
  }

  setPosition(percentage) {
    const position = Math.floor(this.audio[this.current.id].duration * (percentage / 100));
    this.audio[this.current.id].currentTime = position;
  }

  toggle(id?: number) {
    if (id > 0) { this.next.id = id; }
    this.displayToggle(this.next.id);
    // Only wait for a Promise once before resolving
    if (!this.next.pending) {
      this.next.pending = true;
      this.next.promise.then(() => this.implementToggle());
    }
  }

  private displayTime(seconds: number): string {
    const milliseconds = Math.round(seconds * 1000);
    let displayTime = moment.utc( milliseconds ).format('mm:ss');
    const hours = moment.utc( milliseconds ).format('h');
    if (milliseconds >= 3600000 ) { // If >= 1 hour
      displayTime = hours + ':' + displayTime;
    }
    return displayTime;
  }

  private displayToggle(newId?) {
    if (newId) {
      // Update current
      if (this.sub.sermon) { this.sub.sermon.unsubscribe(); }
      this.sub.sermon = this.apiService.getSermon(newId).subscribe((sermon: Sermon) => {
        this.display.title = sermon.name;
        this.display.speaker = sermon.speaker;
        this.display.art = sermon.art;
      });
    }
    this.display.playing = newId !== this.display.id || !this.display.playing;
    this.display.id = newId;
  }

  private implementToggle() {
    this.next.pending = false;
    const different = !this.audio[this.next.id] || this.next.id !== this.current.id;
    // Play if different or paused
    different || this.audio[this.current.id].paused ? this.play(this.next.id) : this.pause();
  }

  private onTimeUpdate() {
    const duration = this.audio[this.current.id].duration;
    const position = this.audio[this.current.id].currentTime;
    // Skip if not a number
    if (isNaN(duration)) { return ''; }
    this.time.next({
      position: this.displayTime(position),
      percentage: ((position / duration) * 100),
      duration: this.displayTime(this.audio[this.current.id].duration)
    });
  }

  private setupAudio(id: number) {
    // Create audio object
    this.audio[id] = new Audio();
    // Subscribe to src
    this.apiService.getSermon(id).subscribe((sermon: Sermon) => {
      this.audio[id].src = sermon.audio;
    });
  }
}

// WIP
export interface CurrentMedia {
  id?: number;
  media?: any;
  playing?: boolean;
};

export interface Sermon {
  art: MediaArt;
  audio: string;
  books: string[];
  meridian: string;
  name: string;
  slug: string;
  speaker: string;
  unix: number;
  verse: string;
}

export interface Display {
  id: number;
  title: string;
  speaker: string;
  duration: string;
  playing: boolean;
  art: MediaArt;
  randomClass?: string;
}

export interface MediaArt {
  color?: string;
  image_large?: string;
  image_medium?: string;
  image_small?: string;
}
