import { createSelector } from 'reselect';
import find from 'lodash/find';

export const getCurItem = createSelector(
  (state) => state.cardItems,
  (state) => state.curItem,
  (items, id) => items && find(items, { id }),
);
