/**
 * @module BackEndModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackEndComponent } from './back-end.component';
/**
 * Child routes for the lazy-loaded {@link BackEndModule}
 */
const routes: Routes = [
  {
    path: '',
    component: BackEndComponent
  }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link BackEndModule}.
 * @consumers {@link BackEndModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackEndRoutingModule { }
