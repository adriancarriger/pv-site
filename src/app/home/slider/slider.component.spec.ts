import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SliderComponent } from './slider.component';
import { HomeModule } from '../home.module';
import { MediaService } from '../../core/media/media.service';
import { ApiService } from '../../core/api/api.service';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let mockApiService: MockApiService;

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [ HomeModule ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
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
