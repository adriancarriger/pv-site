/**
 * @module FrontEndModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontEndComponent } from './front-end.component';
/**
 * Child routes for the lazy-loaded {@link FrontEndModule}
 */
const routes: Routes = [
  {
    path: '',
    component: FrontEndComponent,
    children: [
      {
        path: '',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'resources/sermons',
        loadChildren: '../sermons/sermons.module#SermonsModule'
      },
      {
        path: 'resources/books',
        loadChildren: '../books/books.module#BooksModule'
      },
      {
        path: 'resources/:type',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'ministries/:type',
        loadChildren: '../page/page.module#PageModule',
        data: {
          resourceType: 'ministries'
        }
      },
      {
        path: 'outreaches/:type',
        loadChildren: '../page/page.module#PageModule',
        data: {
          resourceType: 'outreaches'
        }
      },
      {
        path: 'about/:type',
        loadChildren: '../page/page.module#PageModule',
        data: {
          resourceType: 'pages'
        }
      },
      {
        path: 'calendar',
        loadChildren: '../calendar/calendar.module#CalendarModule'
      },
      {
        path: 'events',
        loadChildren: '../events/events.module#EventsModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
      },
      { path: 'wp-admin', redirectTo: '/about/admin', pathMatch: 'prefix' },
      { path: 'wp-login.php', redirectTo: '/about/admin', pathMatch: 'prefix' }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link FrontEndModule}.
 * @consumers {@link FrontEndModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule {}
