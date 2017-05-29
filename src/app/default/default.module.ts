import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FilterModule,
    SharedModule
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule { }
