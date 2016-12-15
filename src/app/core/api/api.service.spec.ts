/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { FirebaseCacheService } from '../../packages/firebase-cache/firebase-cache.service';

describe('Service: ApiService', () => {
  let mockFirebaseCacheService: MockFirebaseCacheService;
  beforeEach(() => {
    mockFirebaseCacheService = new MockFirebaseCacheService();
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: FirebaseCacheService, useValue: mockFirebaseCacheService },
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
