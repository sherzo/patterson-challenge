import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {
      items: [],
      reduction: null,
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
      if (state.cart.reduction) {
        return;
      }

      state.cart.reduction = { ...action.payload };
    },
    removeReduction: (state) => {
      state.cart.reduction = null;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem, addReduction, removeReduction } =
  cartSlice.actions;
