/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseCacheService } from '../firebase-cache/firebase-cache.service';
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
  menu: Observable<any>;
  sermons: Observable<any>;
  latestSermon: Observable<any>;
  constructor(
    private fbCache: FirebaseCacheService) {
    this.onInit();
  }
  /**
   * Called when creating the service.
   * - Gets the required items from Firebase to use in the app
   */
  onInit() {
    this.menu = this.fbCache.object('client/menu');
    this.sermons = this.fbCache.list('client/sermons');
    this.latestSermon = this.fbCache.object('client/latestSermon');
  }
}
