/**
 * @module FrontEndModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndComponent } from './front-end.component';
import { FrontEndRoutingModule } from './front-end-routing.module';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for front end routes.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    SharedModule
  ],
  declarations: [
    FrontEndComponent,
    NavComponent
  ]
})
export class FrontEndModule { }
