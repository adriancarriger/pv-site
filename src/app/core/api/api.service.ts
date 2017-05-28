/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AfoListObservable,
  AfoObjectObservable,
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
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
  menu: AfoListObservable<any>;
  sermons: AfoListObservable<any[]>;
  latestSermon: AfoObjectObservable<any>;
  filterOptions: AfoObjectObservable<any>;
  constructor(
    private afoDatabase: AngularFireOfflineDatabase) {
    this.onInit();
  }
  /**
   * Called when creating the service.
   * - Gets the required items from Firebase to use in the app
   */
  onInit() {
    this.menu = this.afoDatabase.list('client/menu');
    this.sermons = this.afoDatabase.list('client/sermons');
    this.latestSermon = this.afoDatabase.object('client/latestSermon');
    this.filterOptions = this.afoDatabase.object('client/filter');
  }

  getSermon(sermonId) {
    return this.sermons.pluck(sermonId);
  }
}
