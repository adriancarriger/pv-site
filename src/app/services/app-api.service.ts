import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppApiService {
  data: any = null;

  constructor(public http: Http) {}

  get(paramsObj) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      // Parameters obj-
      let params: URLSearchParams = new URLSearchParams();
      Object.keys(paramsObj).forEach(function(key) {
        params.set(key, paramsObj[key]);
      });
      this.http.get('http://pvbiblechurch.com/app-api/', {
            search: params
        })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}

