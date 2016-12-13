import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonClearComponent } from './button-clear/button-clear.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonClearComponent,
    LogoComponent
  ],
  exports: [
    ButtonClearComponent,
    LogoComponent
  ]
})
export class SharedModule { }
