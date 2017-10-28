/**
 * @module ContactModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the contact page.
 * @consumers {@link FrontEndRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
