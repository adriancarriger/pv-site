import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { LogoComponent } from './logo/logo.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { SermonsListComponent } from './sermons-list/sermons-list.component';
import { UiModule } from '../packages/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    UiModule
  ],
  declarations: [
    HeaderDefaultComponent,
    LogoComponent,
    SermonsListComponent
  ],
  exports: [
    HeaderDefaultComponent,
    LogoComponent,
    SermonsListComponent,
    UiModule
  ]
})
export class SharedModule { }
