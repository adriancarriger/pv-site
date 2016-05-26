import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MeowComponent } from './meow.component';
import { TestServiceService } from '../test-service.service';
import {Observable} from 'rxjs/Observable';

class MockTestServiceService extends TestServiceService {
  constructor() {
    super(null);
  }
  bob() {
    return Observable.of([
      {
        id: 26,
        title: 'The title MOCK MOCK MOCK',
        contentRendered: '<p><b>Hi there</b></p>',
        contentMarkdown: '*Hi there*'
      }
    ]);
  }
}

describe('Component: Meow', () => {
  // Starting over
  
});

