/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  AngularFireOffline,
  AfoListObservable,
  AfoObjectObservable } from 'angularfire2-offline';
/**
 * @whatItDoes Reponsible for returning data from an API.
 * @consumers {@link HomeComponent}, {@link RecipeComponent}, {@link RecipeAdComponent}
 * @providerScope {@link AppComponent}
 *
 * --------------------------------------------------------
 * --------------------------------------------------------
 *
 * **Features:**
 * - Currently uses Firebase
 * - Consumers don't need to know which API is used to get the data.
 * - Could easily switch to use another API in the future without changing any of the API
 * consumers.
 */
@Injectable()
export class ApiService {
  menu: AfoObjectObservable<any>;
  sermons: AfoListObservable<any[]>;
  latestSermon: AfoObjectObservable<any>;
  filterOptions: AfoObjectObservable<any>;
  constructor(
    private afo: AngularFireOffline) {
    this.onInit();
  }
  /**
   * Called when creating the service.
   * - Gets the required items from Firebase to use in the app
   */
  onInit() {
    this.menu = this.afo.database.object('client/menu');
    this.sermons = this.afo.database.list('client/sermons');
    this.latestSermon = this.afo.database.object('client/latestSermon');
    this.filterOptions = this.afo.database.object('client/filter');
  }
}
