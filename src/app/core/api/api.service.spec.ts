/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { FirebaseCacheService } from '../firebase-cache/firebase-cache.service';
import { MockFirebaseCacheService } from '../firebase-cache/mock-firebase-cache.service.spec';

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
