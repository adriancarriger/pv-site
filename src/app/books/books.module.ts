/**
 * @module BooksModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the books page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    FilterModule,
    BooksRoutingModule,
    SharedModule
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
