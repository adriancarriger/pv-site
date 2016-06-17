import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchParamsService } from './search-params.service';

@Injectable()
export class ApiObservableService {
  private preSermons$;
  private sermons;
  private dataStore: {};
  private haveSermons = {
    base: false,
    all: false
  };
  constructor(public http: Http, public searchParamsService: SearchParamsService) {
    this.dataStore = { sermons: [] };
    this.preSermons$ = new Subject();
  }

  observe(paramsObj) {
    let searchParams = this.searchParamsService.transform(paramsObj);
    return this.http.get('http://pvbiblechurch.com/app-api/', {
        search: searchParams
    })
    .map( (responseData) => {
      return responseData.json();
    });
  }

  get sermons$() {
    return this.preSermons$.asObservable();
  }

  loadSermons(all?) {
    let preType;
    if (this.haveSermons.all) {
      this.preSermons$.next( this.sermons );
      return;
    } else if (all) {
      preType = 'sermons-all';
      this.haveSermons.all = true;
    } else {
      preType = 'sermons-array';
      this.haveSermons.base = true;
    }
    this.observe({type: preType})
    .subscribe(data => {
      this.sermons = data;
      this.preSermons$.next( this.sermons );
    });
  }

}

