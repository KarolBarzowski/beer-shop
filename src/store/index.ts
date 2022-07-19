import { createSlice, configureStore } from '@reduxjs/toolkit';

interface CartInterface {
  id: number;
  quantity: number;
}

const initialCartState: CartInterface[] = [
  {
    id: 1,
    quantity: 1,
  },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addBeer(state, action) {
      state.push({
        ...action.payload,
      });
    },
    removeBeer(state, action) {
      return state.filter((beer) => beer.id !== action.payload.id);
    },
  },
});

export const { addBeer, removeBeer } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
