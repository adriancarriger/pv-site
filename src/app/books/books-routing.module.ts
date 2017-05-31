/**
 * @module BooksModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
/**
 * Child routes for the lazy-loaded {@link BooksModule}
 */
const routes: Routes = [
  { path: '', component: BooksComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link BooksModule}.
 * @consumers {@link BooksModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
