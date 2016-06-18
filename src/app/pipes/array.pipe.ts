import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asArray'
})
export class Array implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(function(key) {
      let pair = {
        key: undefined
      };
      pair = value[key];
      pair.key = key;
      return pair;
    });
  }
}
