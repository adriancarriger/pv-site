import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GlobalEventsService {
  public scroll$;
  public resize$;
  private throttleConfig = {
    scroll: 300,
    resize: 300
  };
  constructor() {
    this.scroll$ = new EventEmitter();
    this.resize$ = new EventEmitter();
  }

  init() {
    // Tried to addapt this (AngularJS): http://stackoverflow.com/a/23323821/5357459
    // using this (Angular 2): http://stackoverflow.com/a/34703015/5357459
    const scrollEventStream = Observable.fromEvent(document, 'scroll')
      .throttleTime( this.throttleConfig.scroll );
    scrollEventStream.subscribe(event => {
      this.scroll$.emit(event);
    });
    const resizeEventStream = Observable.fromEvent(window, 'resize')
      .throttleTime( this.throttleConfig.resize );
    resizeEventStream.subscribe(event => {
      this.resize$.emit(event);
    });
  }

}
