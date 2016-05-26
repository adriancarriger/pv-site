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
import { TestAreaComponent } from './test-area.component';

describe('Component: TestArea', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TestAreaComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TestAreaComponent],
      (component: TestAreaComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', done => {
    return builder.createAsync(TestAreaComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TestAreaComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
        done();
      });
  });
});

@Component({
  selector: 'test',
  template: `
    <app-test-area></app-test-area>
  `,
  directives: [TestAreaComponent]
})
class TestAreaComponentTestController {
}

