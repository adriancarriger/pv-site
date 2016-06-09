import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderDefaultComponent } from './header-default.component';

describe('Component: HeaderDefault', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HeaderDefaultComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeaderDefaultComponent],
      (component: HeaderDefaultComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeaderDefaultComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeaderDefaultComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-header-default></app-header-default>
  `,
  directives: [HeaderDefaultComponent]
})
class HeaderDefaultComponentTestController {
}

