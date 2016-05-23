import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class SearchParamsService {
  transform(paramsObj) {
    let searchParams: URLSearchParams = new URLSearchParams();
    Object.keys(paramsObj).forEach(function(key) {
      searchParams.set(key, paramsObj[key]);
    });
    return searchParams;
  }
}
