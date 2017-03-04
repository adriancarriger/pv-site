import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter.component';
import { FilterPipe } from './filter.pipe';
import { FilterUtilitiesService } from './filter-utilities.service';
import { RemapPipe } from './remap.pipe';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    FilterComponent,
    FilterPipe,
    RemapPipe
  ],
  exports: [
    FilterComponent,
    FilterPipe,
    RemapPipe
  ]
})
export class FilterModule {
   /**
   * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
   * providers. Recommended in the
   * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FilterModule,
      providers: [
        FilterUtilitiesService
      ]
    };
  }
}
