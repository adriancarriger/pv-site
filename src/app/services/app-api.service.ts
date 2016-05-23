import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchParamsService } from './search-params.service';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppApiService {
  data: any = null;

  constructor(public http: Http, public searchParamsService: SearchParamsService) {}

  get(paramsObj) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      // Parameters object
      let searchParams = this.searchParamsService.transform(paramsObj);
      this.http.get('http://pvbiblechurch.com/app-api/', {
            search: searchParams
        })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
