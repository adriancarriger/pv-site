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
        path: 'resources/:type',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'ministries/:type',
        loadChildren: '../default/default.module#DefaultModule'
      },
      {
        path: 'outreaches/:type',
        loadChildren: '../default/default.module#DefaultModule'
      },
      {
        path: 'about/:type',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'events',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'contact',
        loadChildren: '../home/home.module#HomeModule'
      }
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
export class FrontEndRoutingModule { }
