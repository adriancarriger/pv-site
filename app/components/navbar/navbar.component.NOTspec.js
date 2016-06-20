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
import { provide } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {AppApiService} from '../../services/app-api.service';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { GlobalEventsService } from '../../services/global-events.service';

describe('Component: Navbar', () => {
  let builder;
  let mockAppApiService;

  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    provide(AppApiService, {useValue: mockAppApiService}),
    GlobalEventsService,
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


  it('should build the component', done => {
    return builder
      .overrideProviders(NavbarComponent, [provide(AppApiService, {useValue: mockAppApiService})])
      .createAsync(NavbarComponent).then(fixture => {
      fixture.debugElement.componentInstance.ngOnInit().then(() => {
        let nativeElement = fixture.nativeElement;
        fixture.detectChanges();
        let itemsTotal = nativeElement.querySelectorAll('.navbar-nav > li').length;
        let itemOneText = nativeElement
          .querySelector('.navbar-nav .dropdown-toggle:first-of-type').innerHTML;
        let subItemsTotal = nativeElement.querySelectorAll('.menu-slide').length;
        let subItemOneText = nativeElement
          .querySelector('.menu-slide:first-of-type .title').innerHTML;
        expect(itemsTotal).toBe(3);
        expect(itemOneText).toBe('Item-1');
        expect(subItemsTotal).toBe(3);
        expect(subItemOneText).toBe('Sub-item-1');
        done();
      });

    })
    .catch(e => done.fail(e));
  });

});

class MockAppApiService extends AppApiService {
  constructor() {
    super(null, null, null);
  }
  get(ignoredRequest) {
    let testData = [
      {
        'name': 'Item-1',
        'slug': 'item-1',
        'template': 'DefaultPage',
        'sub': [
          {
              'name': 'Sub-item-1',
              'slug': 'sub-item-1',
              'template': 'default-page'
          },
          {
              'name': 'Sub-item-2',
              'slug': 'sub-item-2',
              'template': 'default-page'
          },
          {
              'name': 'Sub-item-3',
              'url': 'http:\/\/pvbiblechurch.com\/wp-content\/uploads\/pastor-paul-thesis.pdf',
              'slug': 'sub-item-3',
              'template': 'default-page'
          }
        ]
      },
      {
        'name': 'Item-2',
        'slug': 'item-2',
        'template': 'DefaultPage',
        'url': 'http:\/\/pvbiblechurch.com\/events\/'
      },
      {
        'name': 'Item-3',
        'slug': 'item-3',
        'template': 'DefaultPage',
        'url': 'http:\/\/pvbiblechurch.com\/contact\/'
      }
    ];
    return Promise.resolve(testData);
  }
}
*/
//# sourceMappingURL=/Users/adriancarriger/pv/site/tmp/broccoli_type_script_compiler-input_base_path-erU5Ws0U.tmp/0/app/components/navbar/navbar.component.NOTspec.js.map