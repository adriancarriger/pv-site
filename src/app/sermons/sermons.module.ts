/**
 * @module SermonsModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SermonsComponent } from './sermons.component';
import { SermonsRoutingModule } from './sermons-routing.module';
/**
 * @whatItDoes Lazy loaded feature module for the sermons page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    SermonsRoutingModule
  ],
  declarations: [SermonsComponent]
})
export class SermonsModule { }
