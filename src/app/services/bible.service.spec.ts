import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BibleService } from './bible.service';

describe('Bible Service', () => {
  beforeEachProviders(() => [BibleService]);

  it('should ...',
      inject([BibleService], (service: BibleService) => {
    expect(service).toBeTruthy();
  }));
});
