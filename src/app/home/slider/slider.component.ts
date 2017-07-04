import { ChangeDetectorRef, Component, OnChanges, Input, ViewChild } from '@angular/core';

import { NgxSiemaOptions, NgxSiemaComponent } from 'ngx-siema';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {
  @Input('slides') slides: Object[];
  @ViewChild('siema') siema: NgxSiemaComponent;
  loading = false;
  options: NgxSiemaOptions = {
    loop: true
  };
  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges(change) {
    if (change.slides.previousValue && change.slides.currentValue) {
      this.reset();
    }
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

  private reset() {
    this.loading = true;
    this.cd.markForCheck();
    setTimeout(() => {
      this.loading = false;
      this.cd.markForCheck();
    });
  }

}
