/**
 * @module SermonsModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SermonsComponent } from './sermons.component';
/**
 * Child routes for the lazy-loaded {@link SermonsModule}
 */
const routes: Routes = [
  { path: '', component: SermonsComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link SermonsModule}.
 * @consumers {@link SermonsModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SermonsRoutingModule { }
