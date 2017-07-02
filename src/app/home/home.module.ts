/**
 * @module HomeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSiemaModule } from 'ngx-siema';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SliderComponent } from './slider/slider.component';
/**
 * @whatItDoes Lazy loaded feature module for the home page.
 * @consumers {@link FrontEndRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxSiemaModule
  ],
  declarations: [HomeComponent, SliderComponent]
})
export class HomeModule { }
