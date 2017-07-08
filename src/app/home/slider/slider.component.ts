import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NgxSiemaComponent, NgxSiemaOptions } from 'ngx-siema';

import { MediaService } from '../../core/media/media.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnDestroy, OnInit {
  @Input('slides') slides: Object[];
  @Input('homeInfo') homeInfo;
  @Input('latestSermon') latestSermon;
  @ViewChild('siema') siema: NgxSiemaComponent;
  slidePages = [];
  currentSlide = 2;
  interval: NodeJS.Timer;
  keyboardInput: Subscription;
  loading = true;
  options: NgxSiemaOptions = {
    loop: true,
    duration: 500,
    onInit: () => this.loading = false,
    onChange: () => this.onSlideChange()
  };
  resetting = false;
  constructor(
    public mediaService: MediaService,
    private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.slides && changes.slides.previousValue && changes.slides.currentValue) {
      this.reset();
    }
    this.slidePages = ['Home slide', 'Latest sermon slide', ...this.slides];
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.keyboardInput.unsubscribe();
  }

  ngOnInit() {
    this.setupTimer();
    const input = document.documentElement;
    this.keyboardInput = Observable.fromEvent(input, 'keydown')
      .map((event: KeyboardEvent) => event.code)
      .subscribe(this.onKeydown.bind(this));
  }

  goTo(slide: number) {
    if (!this.siema) { return; }
    this.siema.onGoTo(slide);
  }

  next(numbers: number) {
    if (!this.siema) { return; }
    this.siema.onNext(numbers);
  }

  prev(numbers: number) {
    if (!this.siema) { return; }
    this.siema.onPrev(numbers);
  }

  private onKeydown(code: string) {
    if (code === 'ArrowRight') {
      this.next(1);
    } else if (code === 'ArrowLeft') {
      this.prev(1);
    }
  }

  private onSlideChange() {
    this.currentSlide = this.siema['instance'].currentSlide;
    this.cd.markForCheck();
    this.resetTimer();
  }

  private reset() {
    this.loading = true;
    this.resetting = true;
    this.cd.markForCheck();
    setTimeout(() => {
      this.resetting = false;
      this.cd.markForCheck();
    });
  }

  private resetTimer() {
    clearInterval(this.interval);
    this.setupTimer();
  }

  private setupTimer() {
    this.interval = setInterval(() => {
      this.next(1);
    }, 5000);
  }
}
