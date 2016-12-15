import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseCacheService } from './firebase-cache.service';

@NgModule({
  imports: [],
  declarations: []
})
export class FirebaseCacheModule {
  /**
   * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
   * providers. Recommended in the
   * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FirebaseCacheModule,
      providers: [
        FirebaseCacheService
      ]
    };
  }
}
