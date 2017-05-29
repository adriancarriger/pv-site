/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultComponent } from './default.component';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/media/media.service.spec';
import { MediaService } from '../core/media/media.service';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;
  let mockApiService: MockApiService;
  const config: Route[] = [
    { path: '', component: DefaultComponent }
  ];

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [
        FilterModule.forRoot(),
        RouterTestingModule.withRoutes(config),
        SharedModule
      ],
      declarations: [ DefaultComponent ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
