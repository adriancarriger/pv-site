import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GlobalEventsService } from './services/global-events.service';

beforeEachProviders(() => [
  AppComponent,
  GlobalEventsService
]);

describe('App: Ngcli', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
