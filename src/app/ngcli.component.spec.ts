import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgcliAppComponent } from '../app/ngcli.component';
import { GlobalEventsService } from './services/global-events.service';

beforeEachProviders(() => [
  NgcliAppComponent,
  GlobalEventsService
]);

describe('App: Ngcli', () => {
  it('should create the app',
      inject([NgcliAppComponent], (app: NgcliAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
