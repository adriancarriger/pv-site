import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PlayButtonComponent } from './play-button.component';
import { MediaService } from '../../core/media/media.service';
import { SharedModule } from '../shared.module';
import { ApiService } from '../../core/api/api.service';

describe('PlayButtonComponent', () => {
  let component: PlayButtonComponent;
  let mockApiService: MockApiService;
  let fixture: ComponentFixture<PlayButtonComponent>;

  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayButtonComponent);
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
