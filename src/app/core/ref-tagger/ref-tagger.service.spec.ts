import { TestBed, inject } from '@angular/core/testing';

import { RefTaggerService } from './ref-tagger.service';

describe('RefTaggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefTaggerService]
    });
  });

  it('should ...', inject([RefTaggerService], (service: RefTaggerService) => {
    expect(service).toBeTruthy();
  }));
});
