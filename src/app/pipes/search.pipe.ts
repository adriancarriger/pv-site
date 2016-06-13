import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asSearch'
})
export class Search implements PipeTransform {
  transform(value: any, term): any {
    if (value === undefined) { return; };
    if (term === undefined) { return value; };
    let queries = term.toLowerCase().split( ' ' );

    return value.filter((item) => {
      let result = undefined;
      let str = item.name.toLowerCase();
      for ( let i = 0 ; i < queries.length && result !== false ; i++ ) {
          result = str.indexOf( queries[i] ) > -1;
      }
      if (result) { return item; }
    });
  }
}
