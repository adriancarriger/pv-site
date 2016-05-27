import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { provide } from '@angular/core';
// import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import {AppApiService} from '../services/app-api.service';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';

describe('Component: Navbar', () => {
  let builder;
  let mockAppApiService;

  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    provide(AppApiService, {useValue: mockAppApiService}),
    NavbarComponent
  ]);

  beforeEach(inject([TestComponentBuilder], tcb => {
    builder = tcb;
    mockAppApiService = new MockAppApiService();
  }));

  it('should inject the component', inject([NavbarComponent],
      (component: NavbarComponent) => {
    expect(component).toBeTruthy();
  }));


  it('should render work with other format', done => {
    return builder
      .overrideProviders(NavbarComponent, [provide(AppApiService, {useValue: mockAppApiService})])
      .createAsync(NavbarComponent).then(fixture => {
      let nativeElement = fixture.nativeElement;
      console.log( nativeElement.querySelector('#test-id') );
      done();
    })
    .catch(e => done.fail(e));
  });

});

class MockAppApiService extends AppApiService {
  constructor() {
    super(null, null);
  }
  get(ignoredRequest) {
    let testData = [
      {
        title: 'test-title'
      }
    ];
    return Promise.resolve(testData);
  }
}
