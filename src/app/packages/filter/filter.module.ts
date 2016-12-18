import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter.component';
import { FilterPipe } from './filter.pipe';
import { RemapPipe } from './remap.pipe';

@NgModule({
  imports: [],
  declarations: [
    FilterComponent,
    FilterPipe,
    RemapPipe
  ]
})
export class FilterModule { }
