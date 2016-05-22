import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AppApiService } from './app-api.service';

describe('AppApi Service', () => {
  beforeEachProviders(() => [AppApiService]);

  it('should ...',
      inject([AppApiService], (service: AppApiService) => {
    expect(service).toBeTruthy();
  }));
});
