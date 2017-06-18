/**
 * @module FrontEndModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';

import { FrontEndComponent } from './front-end.component';
import { FrontEndRoutingModule } from './front-end-routing.module';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
/**
 * @whatItDoes Lazy loaded feature module for front end routes.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    NouisliderModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    FrontEndComponent,
    NavComponent,
    PlayerComponent,
    SliderComponent,
    FooterComponent
  ]
})
export class FrontEndModule { }
