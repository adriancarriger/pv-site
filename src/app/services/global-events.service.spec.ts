import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GlobalEventsService } from './global-events.service';

describe('GlobalEvents Service', () => {
  beforeEachProviders(() => [GlobalEventsService]);

  it('should ...',
      inject([GlobalEventsService], (service: GlobalEventsService) => {
    expect(service).toBeTruthy();
  }));
});
