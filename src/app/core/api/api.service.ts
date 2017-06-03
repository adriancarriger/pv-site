/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AfoListObservable,
  AfoObjectObservable,
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Page } from '../../page/page.interface';
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
  events: AfoListObservable<any[]>;
  books: AfoListObservable<any[]>;
  latestEvents: AfoObjectObservable<any>;
  latestSermon: AfoObjectObservable<any>;
  latestBook: AfoObjectObservable<any>;
  filterOptions: AfoObjectObservable<any>;
  eventsFilter: AfoObjectObservable<any>;
  booksFilter: AfoObjectObservable<any>;
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
    this.events = this.afoDatabase.list('client/events');
    this.books = this.afoDatabase.list('client/books');
    this.latestEvents = this.afoDatabase.object('client/latestEvents');
    this.latestSermon = this.afoDatabase.object('client/latestSermon');
    this.latestBook = this.afoDatabase.object('client/latestBook');
    this.filterOptions = this.afoDatabase.object('client/filter');
    this.eventsFilter = this.afoDatabase.object('client/eventsFilter');
    this.booksFilter = this.afoDatabase.object('client/booksFilter');
  }

  getSermon(sermonId) {
    return this.sermons.pluck(sermonId);
  }

  resource(type, id: string): AfoObjectObservable<Page> {
    return this.afoDatabase.object(`client/${type}/${id}`);
  }
}
