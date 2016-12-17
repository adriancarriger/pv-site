/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Rx';

import { GlobalEventsService } from './global-events.service';

describe('Service: GlobalEvents', () => {
  let mockWindowService: MockWindowService;
  beforeEach(() => {
    mockWindowService = new MockWindowService();
    TestBed.configureTestingModule({
      providers: [
        GlobalEventsService,
        { provide: 'Window', useValue: <any> mockWindowService }
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
    spyOn( global, 'requestAnimationFrame' ).and.callFake(callback => {
      setTimeout(() => {
        callback();
      }, 50);
    });
  }));

  it('should ...', inject([GlobalEventsService], (service: GlobalEventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call scroll three times', async(inject([GlobalEventsService], (service: GlobalEventsService) => {
    let totalCalled = 0;
    service.emitters$['scroll'].subscribe(() => {
      totalCalled++;
    });
    // Should call
    mockWindowService.scrollTo(0, 0);
    // Should block
    mockWindowService.scrollTo(0, 0);
    setTimeout( () => {
      // Should call
      mockWindowService.scrollTo(0, 0);
    }, 300);
    setTimeout( () => {
      // Should call
      mockWindowService.scrollTo(0, 0);
    }, 500);
    setTimeout( () => {
      expect(totalCalled).toBe(3);
    }, 700);
  })));


  it('should call scroll two times', async(inject([GlobalEventsService], (service: GlobalEventsService) => {
    let totalCalled = 0;
    service.emitters$['scroll'].subscribe(() => {
      totalCalled++;
    });
    // Should call
    mockWindowService.scrollTo(0, 0);
    // Should block
    mockWindowService.scrollTo(0, 0);
    setTimeout( () => {
      // Should call
      mockWindowService.scrollTo(0, 0);
      // Should block
    mockWindowService.scrollTo(0, 0);
    }, 300);
    setTimeout( () => {
      expect(totalCalled).toBe(2);
    }, 500);
  })));

  it('should call resize three times', async(inject([GlobalEventsService], (service: GlobalEventsService) => {
    let totalCalled = 0;
    service.emitters$['resize'].subscribe(() => {
      totalCalled++;
    });
    // Should call
    mockWindowService.newEvent('resize', {new: 'object'});
    // Should block
    mockWindowService.newEvent('resize', {new: 'object'});
    setTimeout( () => {
      // Should call
      mockWindowService.newEvent('resize', {new: 'object'});
      // Should block
      mockWindowService.newEvent('resize', {new: 'object'});
    }, 300);
    setTimeout( () => {
      // Should call
      mockWindowService.newEvent('resize', {new: 'object'});
    }, 500);
    setTimeout( () => {
      expect(totalCalled).toBe(3);
    }, 700);
  })));

  it('should call resize two times', async(inject([GlobalEventsService], (service: GlobalEventsService) => {
    let totalCalled = 0;
    service.emitters$['resize'].subscribe(() => {
      totalCalled++;
    });
    // Should call
    mockWindowService.newEvent('resize', {new: 'object'});
    // Should block
    mockWindowService.newEvent('resize', {new: 'object'});
    setTimeout( () => {
      // Should call
      mockWindowService.newEvent('resize', {new: 'object'});
      // Should block
      mockWindowService.newEvent('resize', {new: 'object'});
    }, 300);
    setTimeout( () => {
      expect(totalCalled).toBe(2);
    }, 500);
  })));

  it('should call scroll one time', async(inject([GlobalEventsService], (service: GlobalEventsService) => {
    let totalCalled = 0;
    service.emitters$['scroll'].subscribe(() => {
      totalCalled++;
    });
    // Should call
    mockWindowService.scrollTo(0, 0);
    // Should block
    mockWindowService.scrollTo(0, 0);
    setTimeout( () => {
      expect(totalCalled).toBe(1);
    }, 200);
  })));
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
