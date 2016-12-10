import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable, ReplaySubject, Subject } from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class MockApiService extends ApiService {
  constructor() {
    super(null);
  }
  onInit() { }
}
