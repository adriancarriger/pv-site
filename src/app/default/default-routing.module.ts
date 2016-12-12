/**
 * @module DefaultModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default.component';
/**
 * Child routes for the lazy-loaded {@link DefaultModule}
 */
const routes: Routes = [
  { path: '', component: DefaultComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link DefaultModule}.
 * @consumers {@link DefaultModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
