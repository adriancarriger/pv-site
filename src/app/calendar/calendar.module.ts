/**
 * @module CalendarModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the calendar page.
 * @consumers {@link FrontEndRoutingModule} (on demand)
 */
@NgModule({
  imports: [CommonModule, CalendarRoutingModule, FilterModule, SharedModule],
  declarations: [CalendarComponent]
})
export class CalendarModule {}
