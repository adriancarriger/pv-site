/**
 * @module BackEndModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackEndComponent } from './back-end.component';
import { BackEndRoutingModule } from './back-end-routing.module';
/**
 * @whatItDoes Lazy loaded feature module for back end routes.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    BackEndRoutingModule,
    CommonModule
  ],
  declarations: [BackEndComponent]
})
export class BackEndModule { }
