import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonClearComponent } from './button-clear/button-clear.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonClearComponent,
    HeaderDefaultComponent,
    LogoComponent
  ],
  exports: [
    ButtonClearComponent,
    HeaderDefaultComponent,
    LogoComponent
  ]
})
export class SharedModule { }
