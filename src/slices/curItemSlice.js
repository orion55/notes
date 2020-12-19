import { createSlice } from '@reduxjs/toolkit';

export const curItemSlice = createSlice({
  name: 'curItem',
  initialState: null,
  reducers: {
    setItem: (state, action) => action.payload,
    clearItem: () => null,
  },
});

export const {
  setItem, clearItem,
} = curItemSlice.actions;

export const selectCurItem = (state) => state.curItem;

export default curItemSlice.reducer;
