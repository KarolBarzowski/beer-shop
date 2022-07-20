import { configureStore } from '@reduxjs/toolkit';
import { beersApi } from 'store/api/beers';
import { cartSlice } from 'store/slices/cart';

export * from 'store/api/beers';
export * from 'store/slices/cart';

export const store = configureStore({
  reducer: {
    [beersApi.reducerPath]: beersApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beersApi.middleware),
});
