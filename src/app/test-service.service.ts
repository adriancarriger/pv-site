import { Injectable } from '@angular/core';
import {AppApiService} from './services/app-api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestServiceService {

  constructor(private appApiService: AppApiService) {}
  bob() {
    //return 'asdfj 2 skd fjs djjj ';
    //return Promise.resolve('bla bla meow');
    return Observable.of([
      {
        id: 26,
        title: 'The title',
        contentRendered: '<p><b>Hi there</b></p>',
        contentMarkdown: '*Hi there*'
      }
    ]);
  }
}
