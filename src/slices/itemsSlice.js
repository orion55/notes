import { createSlice } from '@reduxjs/toolkit';
import find from 'lodash/find';
import { generateItems } from '../libs/misc';

export const itemsSlice = createSlice({
  name: 'cardItems',
  initialState: generateItems(10) || [],
  // initialState: [],
  reducers: {
    add: (state, action) => action.payload,
    remove: (state, action) => {},
    change: (state, action) => state.map((item) => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    }),
    clear: () => [],
  },
});

export const {
  add, remove, change, clear,
} = itemsSlice.actions;

export const selectItems = (state) => state.cardItems;

export default itemsSlice.reducer;
