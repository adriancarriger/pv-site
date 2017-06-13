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
import { RelatedSermonsComponent } from './related-sermons/related-sermons.component';
import { FilterModule } from '../packages/filter/filter.module';
import { EventsListComponent } from './events-list/events-list.component';
import { RelatedEventsComponent } from './related-events/related-events.component';

@NgModule({
  imports: [
    CommonModule,
    FilterModule,
    MomentModule,
    Ng2PaginationModule,
    UiModule
  ],
  declarations: [
    HeaderDefaultComponent,
    LogoComponent,
    PaginationComponent,
    SafeHtmlPipe,
    SermonsListComponent,
    RelatedSermonsComponent,
    EventsListComponent,
    RelatedEventsComponent
  ],
  exports: [
    HeaderDefaultComponent,
    LogoComponent,
    SermonsListComponent,
    FilterModule,
    UiModule,
    MomentModule,
    SafeHtmlPipe,
    EventsListComponent,
    RelatedSermonsComponent,
    RelatedEventsComponent
  ]
})
export class SharedModule { }
