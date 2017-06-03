/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PageComponent } from './page.component';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/media/media.service.spec';
import { MediaService } from '../core/media/media.service';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;
  let mockApiService: MockApiService;
  const config: Route[] = [
    { path: '', component: PageComponent }
  ];

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [
        FilterModule.forRoot(),
        RouterTestingModule.withRoutes(config),
        SharedModule
      ],
      declarations: [ PageComponent ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
