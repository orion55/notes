import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';
import { setItem } from './curItemSlice';

export const itemsSlice = createSlice({
  name: 'cardItems',
  // initialState: generateItems(3) || [],
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => state.filter(({ id }) => id !== action.payload),
    change: (state, action) => state.map((item) => ((item.id === action.payload.id) ? action.payload : item)),
    clear: () => [],
  },
});

export const {
  add, remove, change, clear,
} = itemsSlice.actions;

export const selectItems = (state) => state.cardItems;

export const removeItem = (id) => (dispatch, state) => {
  dispatch(remove(id));

  const { curItem, cardItems } = state();

  if (id === curItem) {
    const newId = (cardItems.length !== 0) ? cardItems[0].id : null;
    dispatch(setItem(newId));
  }
};

export const addItem = () => (dispatch) => {
  const newId = +uniqueId();
  dispatch(add({ id: newId, title: '', desc: '' }));
  dispatch(setItem(newId));
};

export default itemsSlice.reducer;
