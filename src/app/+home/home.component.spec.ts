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
import { HomeComponent } from './home.component';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing'; // Upgrading to router rc3

describe('Component: Home', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    HomeComponent,
    ROUTER_FAKE_PROVIDERS
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HomeComponent],
      (component: HomeComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should build the component', done => {
    return builder
      .createAsync(HomeComponent).then(fixture => {
      let nativeElement = fixture.nativeElement;
      fixture.detectChanges();
      let firstH1Text = nativeElement.querySelector('.jumbotron h1:first-of-type').innerHTML;
      expect(firstH1Text).toBe('Home Page');
      done();
    })
    .catch(e => done.fail(e));
  });
});*/
