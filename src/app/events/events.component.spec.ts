/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';
import { MediaService } from '../core/media/media.service';
import { ApiService } from '../core/api/api.service';
import { FilterModule } from '../packages/filter/filter.module';
import { GlobalEventsService } from '../packages/global-events/global-events.service';
import { MockGlobalEventsService } from '../sermons/sermons.component.spec';
import { WindowRef } from '../packages/window/window.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let mockApiService: MockApiService;
  let mockGlobalEventsService: MockGlobalEventsService;
  beforeEach(async(() => {
    mockApiService = new MockApiService();
    mockGlobalEventsService = new MockGlobalEventsService();
    TestBed.configureTestingModule({
      imports: [
        FilterModule.forRoot(),
        SharedModule
      ],
      declarations: [ EventsComponent ],
      providers: [
        MediaService,
        WindowRef,
        { provide: ApiService, useValue: mockApiService },
        { provide: GlobalEventsService, useValue: mockGlobalEventsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
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
    this.eventsFilter = <any>new Subject();
  }
}
