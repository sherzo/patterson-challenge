import { configureStore } from '@reduxjs/toolkit';

import { ProductsReducer } from '../reducers/products.reducer';
import { cartReducer } from '../slice/cart';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});
