import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({
  name: 'asSearchSermons'
})
export class SearchSermons implements PipeTransform {
  transform(value: any, term?, book?, year?, amPm?): any {
    let books = [], years = [], meridian, queries = [], meridians = {AM: 'Morning', PM: "Evening"};
    if (value === undefined) { return; };
    if (term === null) { return value; }
    if (term.length) { queries = term.toLowerCase().split( ' ' ); }
    if (book !== undefined && book !== 'All books') { books.push(book); }
    if (year !== undefined && year !== 'All years') { years.push(year); }
    if (amPm !== undefined && amPm !== 'AM/PM') { meridian = meridians[amPm]; }
    let filtered = value.filter((item) => {
      // Filter out sermons missing audio
      if (!item.audio) { return false; }
      // Merdian
      if (meridian !== undefined && meridian !== item.meridian) { return false; }
      // Book filter
      let sermonVerse = item.verse;
      for (let i = 0 ; i < books.length; i++) {
        if (sermonVerse.indexOf( books[i] ) === -1) { return false; }
      }
      // Year filter
      let sermonMoment = moment.unix( item.unix );
      let sermonYear = sermonMoment.format('YYYY');
      let sermonDate = sermonMoment.format('M/D/YY');
      for (let i = 0 ; i < years.length; i++) {
        if (sermonYear.indexOf( years[i] ) === -1) { return false; }
      }
      // Search terms
      if (term.length) {
        let speaker = (item.speaker).replace('Pastor ','');
        let str = (item.name + " " + sermonVerse + " " + sermonYear + " " + sermonDate + " " + speaker).toLowerCase();
        for (let i = 0 ; i < queries.length; i++) {
            if (str.indexOf( queries[i] ) === -1) { return false; }
        }
      }
      return item;
    });
    if (filtered.length === 0) {
      filtered = [-1];
    }
    return filtered;
  }

}
