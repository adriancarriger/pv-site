/**
 * @module PageModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
/**
 * Child routes for the lazy-loaded {@link PageModule}
 */
const routes: Routes = [
  { path: '', component: PageComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link PageModule}.
 * @consumers {@link PageModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
