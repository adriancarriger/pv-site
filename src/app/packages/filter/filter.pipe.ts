/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { FilterUtilitiesService } from './filter-utilities.service';
import { StopWords } from './stop-words';
/**
 * Filters data
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * Creates the {@link FilterPipe}
   * @param filterUtilitiesService used for simple utility functions.
   */
  constructor(
    private filterUtilitiesService: FilterUtilitiesService) { }
  /**
   * Filters the input `value` according to the `filteredInput`.
   *
   * @param value input data
   * @param updateTime the timestamp of the last update. Needed because pure pipes do not
   * detect updates to object properties
   * @param filterInput the filter input used to filter the input data
   * @param filteredMeta.searchFields an input for the searchable fields of the value items
   * @param filteredMeta.count the total results returned by the transform
   * @param filteredMeta.query a readable list of the the active filter items
   * @param filteredMeta.prefilter a filter that runs on the data if no other filter inputs are
   * @param filteredMeta.wholeWords only search for whole word matches
   * @param filteredMeta.flatten
   * given.
   */
  transform(value: any, updateTime?: number, filterInput?: any, filteredMeta?: any): any {
    if (!filteredMeta) {
      filteredMeta = {
        searchFields: []
      };
    }
    if (value === undefined || value === null) {
      filteredMeta.count = -1; // filter not active
      return value;
    }
    const filtering = this.filtering(filterInput, filteredMeta);
    if (!filtering.any) {
      filteredMeta.count = -1; // filter not active
      const prefilter = filteredMeta.prefilter !== undefined ? filteredMeta.prefilter : () => true;
      value = this.flatten(filteredMeta.flatten, value);
      value = value
        .filter((item, key) => {
          if (filteredMeta.flatten) { return item; }
          const useItem = prefilter(item);
          if (useItem) { item['key'] = key; } // Temp (ideally would be refactored)
          return useItem;
        })
        .sort(this.byDate); // TODO: refactor .sort into separate pipe
      return this.unflatten(filteredMeta.flatten, value);
    }
    const searchQueries: Array<string> = filtering.search
      ? this.getQueries(filterInput.search, filteredMeta.wholeWords) : [];
    if (searchQueries.length === 0) { filtering.search = false; }
    // Meta data used to filter each item in the input `value`.
    const meta = {
      input: filterInput,
      searchQueries: searchQueries,
      checkSearch: filtering.search,
      searchFields: filteredMeta.searchFields,
      wholeWords: filteredMeta.wholeWords
    };
    value = this.flatten(filteredMeta.flatten, value);
    let filtered = value
      .filter((item, key) => this.filterItem(item, key, meta))
      .sort(this.byDate);
    filteredMeta.count = filtered.length;
    filteredMeta.query = this.readableQueries(filterInput);
    filtered = this.unflatten(filteredMeta.flatten, filtered);
    return filtered;
  }
  private byDate(a, b) {
    if ((a.unix) < (b.unix)) { return 1; }
    if ((a.unix) > (b.unix)) { return -1; }
    return 0;
  }
  /**
   * Checks if the filterInput is trying to filter anything at all.
   */
  private filtering(filterInput, filteredMeta) {
    const status = { any: false, search: false };
    if (filterInput === undefined || filterInput === {}) { return status; }
    for (const key in filterInput) {
      if (key === 'search') {
        if (filterInput[key] !== '' && filteredMeta.searchFields.length > 0) {
          status.search = true;
        }
      } else {
        if (filterInput[key] !== 'all') { status.any = true; }
      }
    }
    if (status.search === true) { status.any = true; }
    return status;
  }
  private flatten(flatten, value) {
    // Flatten
    if (!flatten) { return value; }
    const temp = [];
    value.forEach(itemGroup => {
      itemGroup.forEach(item => {
        item.flattenKey = itemGroup.$key;
        temp.push(item);
      });
    });
    return temp;
  }
  private unflatten(flatten, value) {
    if (!flatten) { return value; }
    const temp = {};
    value.forEach(item => {
      const key = item.flattenKey;
      if (!(key in temp)) {
        temp[item.flattenKey] = [];
      }
      delete item.flattenKey;
      temp[key].push(item);
    });
    return Object.keys(temp).map(itemKey => {
      Object.defineProperty(temp[itemKey], '$key', {
        enumerable: false,
        value: itemKey
      });
      return temp[itemKey];
    });
  }
  /**
   * Takes a raw query string and returns an array of important words to use for search.
   */
  private getQueries(searchQueries: string, wholeWords: boolean): Array<string> {
    // Treat each word as a query and normalize to lowercase
    let queries = searchQueries
      .toLowerCase()
      .split(' ');
    if (!wholeWords) {
      queries = queries.filter(item => this.stopWords().indexOf(item) === -1);
    }
    return queries;
  }
  /**
   * The actual filter logic applied to each item.
   *
   * - Filters out non search queries first (e.g. select box queries)
   * - If filtering by search, then it finds the searchable text and checks if it matches
   * any queries.
   */
  private filterItem(item: Object, key, meta) {
    // Filter by select terms
    if (Object.keys(meta.input) // get filter items
      .filter(x => x !== 'search' && meta.input[x] !== 'all') // remove if not filtering or search
      .find(y => {

        /** * * * * * * * * * * * * * * * * * * * * * * *
         * Temp - start (ideally would be refactored)
         * * * * * * * * * * * * * * * * * * * * * * * **/
        let thisItem;
        if (y === 'aM/PM') {
          if (item['meridian'] === 'Morning') {
            thisItem = 'AM';
          } else if (item['meridian'] === 'Evening') {
            thisItem = 'PM';
          }
        } else if (y === 'years') {
          thisItem = `${moment.unix(item['unix']).year()}`;
        } else {
          thisItem = item[y];
        }
        /** * * * * * * * * * * * * * * * * * * * * * * *
         * Temp - end
         * * * * * * * * * * * * * * * * * * * * * * * **/

        return this.flatArray(thisItem).indexOf(meta.input[y]) === -1;
      })
    ) { return; }
    // Filter by search terms
    if (meta.checkSearch) {
      const searchable: string = meta.searchFields
        .filter(x => item[x] !== undefined)
        .reduce((a, b) => {
          return a + ' ' + this.flatArray(item[b])
            .reduce((e, f) => e + ' ' + f, '')
            .toLowerCase();
        }, '');

      if (meta.wholeWords) {
        const wholeWordFound = meta.searchQueries.find(x => {
          const searchTerm = x.split('"').join('');
          // True if one whole word is found
          return searchable.split(' ').find(y => searchTerm === y);
        });
        if (wholeWordFound) {
          item['key'] = key;
          return item;
        } else {
          return;
        }
      } else {
        // Check if all search query returns false
        const noMatches = meta.searchQueries.find(x => {
          // True if the search term does not exists in the searchable text
          return searchable.indexOf(x) === -1;
        });
        // Remove item from list because nothing matched
        if (noMatches) { return; }
      }
    }
    item['key'] = key;
    return item;
  }
  /**
   * Normalizes a string or array of strings to a flat array of strings.
   */
  private flatArray(input): Array<string> {
    return [input].reduce((c, d) => c.concat(d), []);
  }
  /**
   * Converts queries into a readable list.
   */
  private readableQueries(inputs: Object): string {
    return Object.keys(inputs)
      .map(key => inputs[key])
      .filter(input => ['', 'all'].indexOf(input) === -1)
      .reduce(this.readableList, '');
  }
  /**
   * Reduce an array into a readable list
   */
  private readableList(prev: string, curr: string, i: number, a: Array<string>): string {
    const term: string = curr.toLowerCase();
    const grammer: string = (a.length === i + 1 && a.length > 1) ? ', and ' : i > 0 ? ', ' : '';
    return `${prev}${grammer}"${term}"`;
  }
  /**
   * Returns the current stop words.
   */
  private stopWords(): Array<string> {
    return StopWords;
  }
}
