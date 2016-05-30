import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
import { provide } from '@angular/core';
import { By } from '@angular/platform-browser';
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
        expect(imageTitle).toBe('Women\'s Ministry');
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
    super(null, null);
  }
  get(ignoredRequest) {
    let testData = {
        'image_small': 'http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/image-cache\/site\/b\/bible-for-mens-group.82ceb1a6ff1f1d0890ee39f0a18d5815.jpg',
        'image_medium': 'http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/image-cache\/site\/b\/bible-for-mens-group.347e64debce81777d534cbfdcae7b1c2.jpg',
        'image_large': 'http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/image-cache\/site\/0\/bible-for-mens-group.b882bdfb9e2308ac1c8e3977b7ec257a.jpg',
        'image_x_large': 'http:\/\/pvbiblechurch.com\/wp-content\/uploads\/mp\/image-cache\/site\/5\/bible-for-mens-group.7c37f8f82bde4fdd7aa7c16c3f28f0a9.jpg',
        'first_section': {
            'title': 'Bible Studies',
            'quote': '\'As iron sharpens iron, so one man sharpens another.\' - Proverbs 27:17',
            'content': '<p>The purpose of Men&#8217;s Ministry is to grow and equip godly men who impact their relationships, marriages, families, church, community and workplace for the glory of God and for their spiritual growth.<\/p>'
        }
    };
    return Promise.resolve(testData);
  }
}
