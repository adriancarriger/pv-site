import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';

import { NgxSiemaOptions, NgxSiemaComponent } from 'ngx-siema';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnDestroy, OnInit {
  @Input('slides') slides: Object[];
  @ViewChild('siema') siema: NgxSiemaComponent;
  loading = false;
  interval;
  options: NgxSiemaOptions = {
    loop: true,
    duration: 500,
    onChange: () => this.resetTimer()
  };
  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges(change) {
    if (change.slides.previousValue && change.slides.currentValue) {
      this.reset();
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.setupTimer();
  }

  onPrev(numbers: number) {
    this.siema.onPrev(numbers);
  }

  onNext(numbers: number) {
    this.siema.onNext(numbers);
  }

  onGoTo(slide: number) {
    this.siema.onGoTo(slide);
  }

  private resetTimer() {
    clearInterval(this.interval);
    this.setupTimer();
  }

  private setupTimer() {
    this.interval = setInterval(() => {
      this.onNext(1);
    }, 5000);
  }

  private reset() {
    this.loading = true;
    this.cd.markForCheck();
    setTimeout(() => {
      this.loading = false;
      this.cd.markForCheck();
    });
  }

}
