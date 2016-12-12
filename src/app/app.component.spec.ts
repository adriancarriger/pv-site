/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApiService } from './core/api/api.service';

describe('AppComponent', () => {
  let mockApiService: MockApiService;
  beforeEach(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [
        CoreModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Injectable()
export class MockApiService extends ApiService {
  constructor() {
    super(null);
  }
  onInit() { }
}
