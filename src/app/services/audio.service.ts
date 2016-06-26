import { Injectable, Renderer } from '@angular/core';
import { ApiObservableService } from './api-observable.service';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';

@Injectable()
export class AudioService {
  public preCurrentAudio$;
  public preAudioPosition$;
  public testInfo;
  listenFunc: Function;
  metaData: Function;
  public current = {
    id: 0,
    playing: false,
    init: false,
    title: '',
    speaker: '',
    duration: '',
    art: {},
    randomClass: ''
  };
  public audioObjects = {};
  public sermons;
  constructor(public apiObservableService: ApiObservableService, public renderer: Renderer) {
    this.preCurrentAudio$ = new Subject();
    this.preAudioPosition$ = new Subject();
    this.apiObservableService.sermons$
    .subscribe(data => {
      this.sermons = data;
    });

  }
  play(setCurrent) {
    let oldId = this.current.id;
    if (this.current.id === 0 || (setCurrent !== undefined && setCurrent !== this.current.id)) {
      this.pause();
      this.current.id = setCurrent;
      // Create new audio object
      if (!(this.current.id in this.audioObjects)) {
        this.audioObjects[this.current.id] = new Audio();
        this.audioObjects[this.current.id].src = this.sermons[this.current.id].audio;
        this.current.init = true;
        this.metaData = this.renderer.listen(
          this.audioObjects[this.current.id], 'timeupdate', (event) => {
            this.getDuration();
        });

      } else {
        this.current.duration = this.displayTime( this.audioObjects[this.current.id].duration );
      }
    }
    if (this.current.playing === false) {
      // Start Audio 
      this.updateListeners(oldId);
      this.audioObjects[this.current.id].play();
      this.current.playing = true;
      this.current.title = this.sermons[this.current.id].name;
      this.current.speaker = this.sermons[this.current.id].speaker;
      this.current.art = this.sermons[this.current.id].art;
      this.preCurrentAudio$.next(this.current);
    }
  }
  pause() {
    if (this.current.id in this.audioObjects) {
      this.audioObjects[this.current.id].pause();
      this.current.playing = false;
      this.preCurrentAudio$.next(this.current);
    }
  }

  updateListeners(oldId) {
    if (oldId !== 0) {
      this.listenFunc();
    }
    this.listenFunc = this.renderer.listen(
      this.audioObjects[this.current.id], 'timeupdate', (event) => {
        this.updatePosition();
    });
  }

  getDuration() {
    this.current.duration = this.displayTime( this.audioObjects[this.current.id].duration );
    this.metaData();
    this.preCurrentAudio$.next(this.current);
  }

  updatePosition() {
    let duration = Math.floor(this.audioObjects[this.current.id].duration);
    let position = Math.floor(this.audioObjects[this.current.id].currentTime);
    let percentage = (position / duration) * 100;
    let displayPosition = this.displayTime(position);
    this.preAudioPosition$.next({
      percentage: percentage,
      time: displayPosition
    });

  }

  initCurrent() {
    this.preCurrentAudio$.next(this.current);
  }

  displayTime(seconds) {
    let milliseconds = seconds * 1000;
    let displayTime = moment.utc( milliseconds ).format('mm:ss');
    let hours = moment.utc( milliseconds ).format('h');
    if (milliseconds >= 3600000 ) { // If >= 1 hour
      displayTime = hours + ':' + displayTime;
    }
    return displayTime;
  }

  get currentAudio$() {
    return this.preCurrentAudio$.asObservable();
  }

  get audioPosition$() {
    return this.preAudioPosition$.asObservable();
  }

  setPosition(percentage) {
    let newPosition = Math.floor(this.audioObjects[this.current.id].duration * percentage * 0.01);
    this.audioObjects[this.current.id].currentTime = newPosition;
  }

}
