/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { FilterComponent } from './filter.component';
import { FilterUtilitiesService } from './filter-utilities.service';
import { RemapPipe } from './remap.pipe';
import { GlobalEventsService } from '../global-events/global-events.service';
import { UiModule } from '../ui/ui.module';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockGlobalEventsService: MockGlobalEventsService;
  let mockWindowService: MockWindowService;
  beforeEach(async(() => {
    mockWindowService = new MockWindowService();
    mockGlobalEventsService = new MockGlobalEventsService();
    TestBed.configureTestingModule({
      imports: [ UiModule ],
      declarations: [ FilterComponent, RemapPipe ],
      providers: [
        FilterUtilitiesService,
        { provide: GlobalEventsService, useValue: mockGlobalEventsService },
        { provide: 'Window', useValue: mockWindowService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    mockWindowService.pageYOffset = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close drawer on scroll', () => {
    component.onDrawerToggle();
    component.dontCloseOnScroll = false;
    expect(component.drawerOpen).toBe(true);
    mockGlobalEventsService.update();
    expect(component.drawerOpen).toBe(false);
  });

  it('should not close drawer on scroll if dontCloseOnScroll is true', () => {
    component.onDrawerToggle();
    expect(component.dontCloseOnScroll).toBe(true);
    expect(component.drawerOpen).toBe(true);
    mockGlobalEventsService.update();
    expect(component.drawerOpen).toBe(true);
    expect(component.dontCloseOnScroll).toBe(false);
  });

  it('should set map to null', () => {
    component.map = 'mobile';
    mockWindowService.innerWidth = 1200;
    mockGlobalEventsService.update();
    expect(component.map).toEqual('default');
  });

  it('should set map to mobile', () => {
    component.map = 'default';
    mockWindowService.innerWidth = 700;
    mockGlobalEventsService.update();
    expect(component.map).toEqual('mobile');
  });

  it('should open the drawer', () => {
    document.body.style.height = '900px';
    document.body.style.margin = '132px';
    expect(component.drawerOpen).toBe(false);
    component.onDrawerToggle();
    fixture.detectChanges();
    expect(component.drawerOpen).toBe(true);
    // Reset for future tests
    document.body.style.height = '0';
    document.body.style.margin = '0';
  });

  it('should close the drawer', () => {
    component.onDrawerToggle();
    expect(component.drawerOpen).toBe(true);
    component.onDrawerToggle();
    expect(component.drawerOpen).toBe(false);
  });

  it('should update select values', () => {
    component.onSelectUpdate('Test name here', 'all');
    component.onSelectUpdate('Another test name here', 'new value 1');
    component.onUpdate();
    fixture.detectChanges();
    let filterValues = component.filterValues;
    let thisValue = filterValues['anotherTestNameHere'];
    expect(thisValue).toBe('new value 1');
  });
});

@Injectable()
export class MockWindowService {
  events$ = { };
  pageXOffset: number;
  pageYOffset: number;
  innerWidth = 0;
  newEvent(event, eventObject) {
    this.events$[event].next(eventObject);
  }
  addEventListener(event, callback) {
    this.events$[event] = new Subject();
    this.events$[event].asObservable().subscribe(eventObject => {
      callback(eventObject);
    });
  }
  removeEventListener(event, callback) { }
  scrollTo(x, y) {
    this.pageXOffset = x;
    this.pageYOffset = y;
    if ('scroll' in this.events$) {
      this.scrollEvent();
    }
  }
  private scrollEvent() {
    this.newEvent('scroll', {
      x: this.pageXOffset,
      y: this.pageYOffset
    });
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
