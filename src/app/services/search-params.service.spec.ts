import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SearchParamsService } from './search-params.service';

describe('SearchParams Service', () => {
  beforeEachProviders(() => [SearchParamsService]);

  it('should create the service',
      inject([SearchParamsService], (service: SearchParamsService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a URLSearchParams object',
      inject([SearchParamsService], (service: SearchParamsService) => {
    let obj = {
      type: 'defaultPage',
      category: 'testCat'
    };
    let newObj = service.transform(obj);
    expect(newObj.get('type')).toBe('defaultPage');
    expect(newObj.has('category')).toBeTruthy();
  }));

});
