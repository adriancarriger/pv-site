/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconArrowDownComponent } from '../icons/icon-arrow-down/icon-arrow-down.component';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconArrowDownComponent, SelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.category = 'Options';
    component.options = ['Option1', 'Option2', 'Option3'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the select value', () => {
    let selectNative = fixture.nativeElement.firstElementChild;
    let initialValue = selectNative.options[selectNative.selectedIndex].value;
    expect(initialValue).toBe('all');
    component.set('Option3');
    fixture.detectChanges();
    let newValue = selectNative.options[selectNative.selectedIndex].value;
    expect(newValue).toBe('Option3');
  });

  it('should get the select value', () => {
    expect( component.get() ).toBe('all');
    fixture.nativeElement.firstElementChild.value = 'Option2';
    fixture.detectChanges();
    expect( component.get() ).toBe('Option2');
  });
});
