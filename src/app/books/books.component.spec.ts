/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BooksComponent } from './books.component';
import { ApiService } from '../core/api/api.service';
import { SharedModule } from '../shared/shared.module';
import { FilterModule } from '../packages/filter/filter.module';
import { GlobalEventsService } from '../packages/global-events/global-events.service';
import { WindowRef } from '../packages/window/window.service';
import { MediaService } from '../core/media/media.service';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let mockApiService: MockApiService;
  let mockGlobalEventsService: MockGlobalEventsService;
  beforeEach(async(() => {
    mockApiService = new MockApiService();
    mockGlobalEventsService = new MockGlobalEventsService();
    TestBed.configureTestingModule({
      imports: [ FilterModule.forRoot(), SharedModule ],
      declarations: [ BooksComponent ],
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
    fixture = TestBed.createComponent(BooksComponent);
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
    this.booksFilter = <any>new Subject();
  }
}

@Injectable()
export class MockGlobalEventsService extends GlobalEventsService {
  constructor() {
    super(null);
  }
  onInit() {
    this.emitters$['scroll'] = new Subject();
    this.emitters$['resize'] = new Subject();
  }
  update() {
    this.emitters$['scroll'].next();
    this.emitters$['resize'].next();
  }
}
