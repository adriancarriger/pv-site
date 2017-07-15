import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortKey?: string): any {
    if (sortKey) {
      return value.sort((a, b) => a[sortKey] > b[sortKey]);
    } else {
      return value.sort();
    }
  }

}
