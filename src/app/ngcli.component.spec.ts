import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgcliAppComponent } from '../app/ngcli.component';

beforeEachProviders(() => [NgcliAppComponent]);

describe('App: Ngcli', () => {
  it('should create the app',
      inject([NgcliAppComponent], (app: NgcliAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
