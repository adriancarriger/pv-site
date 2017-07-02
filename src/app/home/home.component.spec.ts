import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs/Subject';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { ApiService } from '../core/api/api.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService: MockApiService;

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, SharedModule, HomeModule ],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
  onInit() {
    this.menu = <any>new Subject();
  }
}
