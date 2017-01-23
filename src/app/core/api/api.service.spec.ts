/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { AngularFireOffline } from 'angularfire2-offline';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

describe('Service: ApiService', () => {
  let mockAngularFireOffline: MockAngularFireOffline;
  beforeEach(() => {
    mockAngularFireOffline = new MockAngularFireOffline();
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: AngularFireOffline, useValue: mockAngularFireOffline },
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('should create the service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});

export const MockApiData = [
  {
    dataUrl: 'https://example.com/slug-1',
    date: '',
    id: 1,
    stamp: 1437120051000,
    slug: 'slug-1',
    text: 'this is string of searchable text'
  }
];

@Injectable()
export class MockAngularFireOffline {
  list$;
  input;
  database = {
    list: undefined,
    object: undefined
  };
  private mockArray: Array<Object>;
  constructor() {
    this.database.list = (input: string, query?) => {
      return this.list$.asObservable();
    };
    this.database.object = (input: string) => {
      this.input = input;
    return this.list$.asObservable();
    };
    this.mockArray = MockApiData;
    this.list$ = new Subject();
    this.update();
  }
  update() {
    const nextObj = this.mockArray;
    this.list$.next(nextObj);
  }
}
