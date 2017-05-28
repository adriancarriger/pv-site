import { TestBed, inject } from '@angular/core/testing';

import { MediaService } from './media.service';
import { ApiService } from '../api/api.service';

describe('MediaService', () => {
  let mockApiService: MockApiService;
  beforeEach(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: mockApiService },
        MediaService
      ]
    });
  });

  it('should ...', inject([MediaService], (service: MediaService) => {
    expect(service).toBeTruthy();
  }));
});

export class MockApiService extends ApiService {
  constructor() {
    super(null);
  }
  onInit() { }
}
