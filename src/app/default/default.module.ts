import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule { }
