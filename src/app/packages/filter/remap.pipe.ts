/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * @whatItDoes Allows the reordering of an array in an `*ngFor` to effectively move the elements
 * into a different order without destroying and recreating the elements.
 */
@Pipe({
  name: 'remap'
})
export class RemapPipe implements PipeTransform {
  /**
   * Sorts the input according to each items `mapTo` property.
   */
  transform(value: any, mapTo = 'default'): any {
    if (value === null || value === undefined) { return; }
    return value.sort((a, b) => {
      const aExists = a.order !== undefined;
      const bExists = b.order !== undefined;
      if (aExists && bExists) { // if both exist
        return a.order[mapTo] - b.order[mapTo]; // order according to the order provided
      } else if (aExists) { // if only A
        return -1; // move `a` before `b`
      }  else if (bExists) { // if only B
        return -1; // move `b` before `a`
      } else { // no order provided
        return 0; // do nothing
      }
    });
  }
}
