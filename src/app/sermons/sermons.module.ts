/**
 * @module SermonsModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SermonsComponent } from './sermons.component';
import { SermonsRoutingModule } from './sermons-routing.module';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the sermons page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    FilterModule,
    SermonsRoutingModule,
    SharedModule
  ],
  declarations: [SermonsComponent]
})
export class SermonsModule { }
