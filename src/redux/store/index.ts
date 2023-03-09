import { configureStore } from '@reduxjs/toolkit';

import { ProductsReducer } from '../reducers/products.reducer';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
