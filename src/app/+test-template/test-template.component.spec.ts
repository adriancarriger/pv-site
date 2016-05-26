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
import { TestTemplateComponent } from './test-template.component';

describe('Component: TestTemplate', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TestTemplateComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TestTemplateComponent],
      (component: TestTemplateComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', done => {
    return builder.createAsync(TestTemplateComponentTestComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TestTemplateComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
        done();
      });
  });
});

@Component({
  selector: 'as-test',
  template: `
    <as-test-template></as-test-template>
  `,
  directives: [TestTemplateComponent]
})
class TestTemplateComponentTestComponent {
}

