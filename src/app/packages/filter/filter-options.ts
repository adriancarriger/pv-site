/**
 * @module HomeModule
 */ /** */
/**
 * Options used by the {@link FilterComponent}.
 */
export interface FilterOptions {
  items: FilterItems;
  searchFields: Array<string>;
}
/**
 * Items used to filter
 * - Items can contain differernt ordering priorities if needed. For example, if the order for mobile
 * should be different.
 * - Type sepcifies what kind of input should be show for this filter item.
 */
export interface FilterItems {
  [index: number]: { // array index
    name?: string; // used for labels and not required for search
    options: Array<string>; // select boxes available options
    order?: { // optional: if no order is given, the array order will be used
      default: Number; // default order this item should appear on the filter
      mobile?: Number; // optional different order for mobile break point
    };
    type: string; // supported types: search, select
  };
}
