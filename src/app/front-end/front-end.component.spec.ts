/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NouisliderModule } from 'ng2-nouislider';

import { FrontEndComponent } from './front-end.component';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';
import { SliderComponent } from './slider/slider.component';
import { ApiService } from '../core/api/api.service';
import { SharedModule } from '../shared/shared.module';

describe('FrontEndComponent', () => {
  let component: FrontEndComponent;
  let fixture: ComponentFixture<FrontEndComponent>;
  let mockApiService: MockApiService;
  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NouisliderModule,
        SharedModule
      ],
      declarations: [
        FrontEndComponent,
        NavComponent,
        PlayerComponent,
        SliderComponent
      ],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Injectable()
export class MockApiService extends ApiService {
  constructor() {
    super(null);
  }
  onInit() { }
}
