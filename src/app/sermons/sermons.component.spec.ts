/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SermonsComponent } from './sermons.component';

describe('SermonsComponent', () => {
  let component: SermonsComponent;
  let fixture: ComponentFixture<SermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
