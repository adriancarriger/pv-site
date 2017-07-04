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

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnDestroy, OnInit {
  @Input('slides') slides: Object[];
  @ViewChild('siema') siema: NgxSiemaComponent;
  currentSlide = 0;
  interval: NodeJS.Timer;
  keyboardInput: Subscription;
  loading = false;
  options: NgxSiemaOptions = {
    loop: true,
    duration: 500,
    onChange: () => this.onSlideChange()
  };
  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.slides.previousValue && changes.slides.currentValue) {
      this.reset();
    }
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
    this.siema.onGoTo(slide);
  }

  next(numbers: number) {
    this.siema.onNext(numbers);
  }

  prev(numbers: number) {
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
    this.cd.markForCheck();
    setTimeout(() => {
      this.loading = false;
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
