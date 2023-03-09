import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {
      items: [],
      reductions: [],
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        return;
      }
      state.cart.items.push({ ...action.payload });
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.items.filter(
        (item) => item.id !== action.payload
      );
      state.cart.items = removeItem;
    },
    addReduction: (state, action) => {
      const exists = state.cart.reductions.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        return;
      }
      state.cart.reductions.push({ ...action.payload });
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem, addReduction } = cartSlice.actions;
