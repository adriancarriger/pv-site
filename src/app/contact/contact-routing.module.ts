/**
 * @module ContactModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';
/**
 * Child routes for the lazy-loaded {@link ContactModule}
 */
const routes: Routes = [
  { path: '', component: ContactComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link ContactModule}.
 * @consumers {@link ContactModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
