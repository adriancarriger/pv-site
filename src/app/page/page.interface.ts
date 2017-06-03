import { FilterOptions } from '../packages/filter/filter-options';

export interface Page {
  filter: FilterOptions;
  header: Header;
  content: ContentItem[];
}

export interface ContentItem {
  html?: string;
  title?: string;
  text?: string;
}

export interface Header {
  image: Image;
  title: string;
  subtitle?: string;
  useOverlay: boolean;
  [key: string]: any;
}

export interface Image {
  image_x_large: string;
  image_large: string;
  image_medium: string;
  image_small: string;
}
