import {
  beforeEachProviders,
  it,
  describe,
  beforeEach,
  expect,
  inject,
  injectAsync
} from '@angular/core/testing';
import {Http, Response, ResponseOptions, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { provide } from '@angular/core';
import { AppApiService } from './app-api.service';
import { SearchParamsService } from './search-params.service';

describe('AppApi Service', () => {
  let mockbackend, service;

  // setup
  beforeEachProviders(() => [
    AppApiService,
    MockBackend,
    BaseRequestOptions,
    SearchParamsService,
    provide(Http, {
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  beforeEach(injectAsync([MockBackend, AppApiService], (injectedMockbackend, injectedService) => {
    mockbackend = injectedMockbackend;
    service = injectedService;
  }));

  it('should inject the service',
      inject([AppApiService], (appApiService: AppApiService) => {
    expect(appApiService).toBeTruthy();
  }));

  it('should return a mocked response', done => {
    let response = [ // pages
      {
        name: 'Test page 1',
        url : 'test-page'
      },
      {
        name: 'Test page 2',
        url : 'test-page-2'
      }
    ];

    let options = new ResponseOptions({body: JSON.stringify(response)});

    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(options));
    });
    service.get('test data').then(data => {
      expect(data[0].name).toContain('Test page');
      expect(data[0].name).toContain(1);
      expect(data[1].name).toContain(2);
      expect(data.length).toBe(2);
      done();
    });
  });

});
