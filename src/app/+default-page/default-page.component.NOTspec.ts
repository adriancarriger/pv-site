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
import { DefaultPageComponent } from './default-page.component';

describe('Component: DefaultPage', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DefaultPageComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DefaultPageComponent],
      (component: DefaultPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DefaultPageComponentTestComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DefaultPageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'as-test',
  template: `
    <as-default-page></as-default-page>
  `,
  directives: [DefaultPageComponent]
})
class DefaultPageComponentTestComponent {
}

