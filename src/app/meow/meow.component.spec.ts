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
import { MeowComponent } from './meow.component';

describe('Component: Meow', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MeowComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MeowComponent],
      (component: MeowComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', done => {
    return builder.createAsync(MeowComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MeowComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
        done();
      });
  });
});

@Component({
  selector: 'test',
  template: `
    <app-meow></app-meow>
  `,
  directives: [MeowComponent]
})
class MeowComponentTestController {
}

