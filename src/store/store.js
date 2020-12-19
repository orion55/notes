import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from '../slices/itemsSlice';
import curItemSlice from '../slices/curItemSlice';

export default configureStore({
  reducer: {
    cardItems: itemsSlice,
    curItem: curItemSlice,
  },
});
