import { TCategoriesType } from '../types/category_types';

export const CATEGORIES = Object.freeze({
  ALL: 'All',
  CURRENCIES: 'Currencies',
  FLAGS: 'Flags',
  ILLUSTRATIVE: 'Illustrative',
  LABEL_PAIRED: 'Label Paired',
  LOGO: 'Logo',
  MARKETS: 'Markets',
  SOCIAL: 'Social',
  STANDALONE: 'Standalone',
});

export const DEFAULT_CATEGORY: TCategoriesType = CATEGORIES.CURRENCIES;

export const CUSTOM_ICON_SIZE_SELECTION_CATEGORIES: string[] = [CATEGORIES.ALL, CATEGORIES.LOGO];

export const PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES: string[] = [
  CATEGORIES.ALL,
  CATEGORIES.CURRENCIES,
  CATEGORIES.FLAGS,
  CATEGORIES.ILLUSTRATIVE,
  CATEGORIES.LABEL_PAIRED,
  CATEGORIES.MARKETS,
  CATEGORIES.SOCIAL,
  CATEGORIES.STANDALONE,
];
