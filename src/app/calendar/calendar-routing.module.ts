/**
 * @module CalendarModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar.component';
/**
 * Child routes for the lazy-loaded {@link CalendarModule}
 */
const routes: Routes = [{ path: '', component: CalendarComponent }];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link CalendarModule}.
 * @consumers {@link CalendarModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
