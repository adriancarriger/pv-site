/**
 * @module EventsModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
/**
 * Child routes for the lazy-loaded {@link EventsModule}
 */
const routes: Routes = [
  { path: '', component: EventsComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link EventsModule}.
 * @consumers {@link EventsModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
