/*
import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
import { provide } from '@angular/core';
import { DefaultPageComponent } from './default-page.component';
import {AppApiService} from '../services/app-api.service';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { RouteSegment } from '@angular/router';

describe('Component: DefaultPage', () => {
  let builder;
  let mockAppApiService;

  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    provide(AppApiService, {useValue: mockAppApiService}),
    provide(RouteSegment, {useClass: MockRouteSegment}),
    DefaultPageComponent
  ]);

  beforeEach(inject([TestComponentBuilder], tcb => {
    builder = tcb;
    mockAppApiService = new MockAppApiService();
  }));

  it('should inject the component', inject([DefaultPageComponent],
      (component: DefaultPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should build the component', done => {
    return builder
      .overrideProviders(DefaultPageComponent, [
        provide(AppApiService, {useValue: mockAppApiService}),
        provide(RouteSegment, {useClass: MockRouteSegment})
      ])
      .createAsync(DefaultPageComponent).then(fixture => {
      fixture.debugElement.componentInstance.ngOnInit().then(() => {
        let nativeElement = fixture.nativeElement;
        fixture.detectChanges();
        let imageTitle = nativeElement
          .querySelector('.container-image h1').innerHTML;
        expect(imageTitle).toBe('Test Title');
        done();
      });

    })
    .catch(e => done.fail(e));
  });

});

class MockRouteSegment {
  public urlSegments = [{
    segment: 'test-category-1'
  }];
  getParam(param) {
    return 'test-slug-1';
  }
}
class MockAppApiService extends AppApiService {
  constructor() {
    super(null, null, null);
  }
  get(ignoredRequest) {
    let testData = {
        'image_small': '/app/assets/test-pattern-5.jpg',
        'image_medium': '/app/assets/test-pattern-5.jpg',
        'image_large': '/app/assets/test-pattern-5.jpg',
        'image_x_large': '/app/assets/test-pattern-5.jpg',
        'title': 'Test Title',
        'first_section': {
            'title': 'Bible Studies',
            'quote': '\'As iron sharpens iron, so one man sharpens another.\' - Proverbs 27:17',
            'content': 'Test content here.'
        }
    };
    return Promise.resolve(testData);
  }
}
*/
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-CDZkVC0n.tmp/0/app/+default-page/default-page.component.NOTspec.js.map