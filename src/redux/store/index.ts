import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../reducers/products.reducer';
import { cartReducer } from '../slice/cart';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistedProductsReducer = persistReducer(
  {
    key: 'products',
    storage,
  },
  productsReducer
);

const persistedCartReducer = persistReducer(
  {
    key: 'cart',
    storage,
  },
  cartReducer
);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
