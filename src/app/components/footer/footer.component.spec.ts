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
import { FooterComponent } from './footer.component';

describe('Component: Footer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FooterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FooterComponent],
      (component: FooterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', done => {
    return builder.createAsync(FooterComponentTestComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FooterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
        done();
      });
  });
});

@Component({
  selector: 'as-test',
  template: `
    <as-footer></as-footer>
  `,
  directives: [FooterComponent]
})
class FooterComponentTestComponent {
}

