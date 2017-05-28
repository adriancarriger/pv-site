/**
 * @module CoreModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { ApiService } from './api/api.service';
import { firebaseConfig } from './firebase-config';
import { MediaService } from './media/media.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { GlobalEventsModule } from '../packages/global-events/global-events.module';
import { FilterModule } from '../packages/filter/filter.module';
import { WindowRef } from '../packages/window/window.service';
/**
 * @whatItDoes {@link CoreModule} exists to make commonly used singleton services and single-use classes available
 * for use in the many other modules.
 * @consumers {@link AppModule}
 *
 * This module follows the Angular style guide [STYLE 04-11](https://angular.io/styleguide#04-11)
 */
@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    CommonModule,
    FilterModule.forRoot(),
    GlobalEventsModule.forRoot(),
    RouterModule
  ],
  exports: [
  ],
  declarations: [
  ]
})
export class CoreModule {
  /**
   * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
   * providers. Recommended in the
   * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        MediaService,
        WindowRef
      ]
    };
  }
  /**
   * Prevent reimport of CoreModule
   * [STYLE 04-11](https://angular.io/styleguide#04-12)
   * @param parentModule will be `null` if {@link CoreModule} is not reimported by another module,
   * otherwise it will throw an error.
   * @see [Angular 2 docs - Prevent reimport of the CoreModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#prevent-reimport)
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
