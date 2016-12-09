/**
 * @module AppModule
 * @preferred
 */ /** */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
/**
 * @whatItDoes The root module class that is bootstraped by the `main.ts` file.
 * @see [Angular 2 docs - the application root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#root-module)
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
