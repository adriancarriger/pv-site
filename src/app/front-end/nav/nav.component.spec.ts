/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';
import { ApiService } from '../../core/api/api.service';
import { SharedModule } from '../../shared/shared.module';
import { MediaService } from '../../core/media/media.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockApiService: MockApiService;
  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, SharedModule ],
      declarations: [ NavComponent ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
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
