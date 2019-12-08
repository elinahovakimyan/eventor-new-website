import { FIXED, PER_ADULT, PER_CHILD } from './constants';

export const getIconbyPriceType = (type) => {
  switch (type) {
    case FIXED:
      return '/assets/icons/price.svg';
    case PER_ADULT:
      return '/assets/icons/person.svg';
    case PER_CHILD:
      return '/assets/icons/child.svg';
    default:
      return '';
  }
};
