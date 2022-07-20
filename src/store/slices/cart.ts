import { createSlice } from '@reduxjs/toolkit';

interface CartInterface {
  id: number;
  quantity: number;
}

const initialState: CartInterface[] = [
  {
    id: 1,
    quantity: 1,
  },
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
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
