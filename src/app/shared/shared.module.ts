import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { UiModule } from '../packages/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    HeaderDefaultComponent,
    LogoComponent
  ],
  exports: [
    HeaderDefaultComponent,
    LogoComponent,
    UiModule
  ]
})
export class SharedModule { }
