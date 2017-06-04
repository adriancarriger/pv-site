import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { Ng2PaginationModule } from 'ng2-pagination';

import { LogoComponent } from './logo/logo.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SermonsListComponent } from './sermons-list/sermons-list.component';
import { UiModule } from '../packages/ui/ui.module';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    Ng2PaginationModule,
    UiModule
  ],
  declarations: [
    HeaderDefaultComponent,
    LogoComponent,
    PaginationComponent,
    SafeHtmlPipe,
    SermonsListComponent
  ],
  exports: [
    HeaderDefaultComponent,
    LogoComponent,
    SermonsListComponent,
    UiModule,
    MomentModule,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
