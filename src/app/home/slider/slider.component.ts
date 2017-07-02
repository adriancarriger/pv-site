import { ChangeDetectorRef, Component, OnChanges, Input } from '@angular/core';

import { NgxSiemaOptions } from 'ngx-siema';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {
  @Input('slides') slides: Object[];
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

  private reset() {
    this.loading = true;
    this.cd.markForCheck();
    setTimeout(() => {
      this.loading = false;
      this.cd.markForCheck();
    });
  }

}
