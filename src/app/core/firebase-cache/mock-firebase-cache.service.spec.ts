import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { MockApiData } from '../api/mock-api-data.spec';
import { FirebaseCacheService } from './firebase-cache.service';

@Injectable()
export class MockFirebaseCacheService extends FirebaseCacheService {
  list$;
  input;
  private mockArray: Array<Object>;
  constructor() {
    super(null, null);
    this.mockArray = MockApiData;
    this.list$ = new Subject();
    this.update();
  }
  list(input: string, query?) {
    return this.list$.asObservable();
  }
  object(input: string) {
    this.input = input;
    return this.list$.asObservable();
  }
  update() {
    let nextObj = this.mockArray;
    this.list$.next(nextObj);
  }
}
