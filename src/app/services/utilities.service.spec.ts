import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UtilitiesService } from './utilities.service';

describe('Utilities Service', () => {
  beforeEachProviders(() => [UtilitiesService]);

  it('should ...',
      inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
