import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { FilterModule } from '../packages/filter/filter.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    FilterModule,
    SharedModule
  ],
  declarations: [PageComponent]
})
export class PageModule { }
