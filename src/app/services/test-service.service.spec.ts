import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TestServiceService } from './test-service.service';

describe('TestService Service', () => {
  beforeEachProviders(() => [TestServiceService]);

  it('should ...',
      inject([TestServiceService], (service: TestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
