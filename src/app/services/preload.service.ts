import { Injectable } from '@angular/core';
import { ApiObservableService } from './api-observable.service';

@Injectable()
export class PreloadService {
  public promises = 0;
  private timeout;
  constructor(public apiObservableService: ApiObservableService) {}

  load() {
    console.log('preloading started...');
    // this.apiObservableService.fullLoad();
  }
  preloadReady() {
    return this.promises++ === 0;
  }
  requestStart() {
    this.promises++;
    clearTimeout(this.timeout);
    console.log('Requesting data', this.promises);
  }
  requestComplete() {
    this.promises--;
    console.log('Api just got data', this.promises);
    if (this.promises === 0) {
      this.timeout = setTimeout(() => {
        this.load();
      }, 3500);
    }
  }

}
