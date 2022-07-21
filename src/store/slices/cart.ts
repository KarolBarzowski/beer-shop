import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartInterface } from 'interfaces/Cart.interface';

const initialState: CartInterface[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addBeer(state, action: PayloadAction<CartInterface>) {
      const index = state.findIndex(
        (element) => element.id === action.payload.id
      );

      if (index > -1) {
        state[index].quantity += action.payload.quantity;
      } else {
        state.push({
          ...action.payload,
        });
      }
    },
    removeBeer(state, action) {
      return state.filter((beer) => beer.id !== action.payload.id);
    },
  },
});

export const { addBeer, removeBeer } = cartSlice.actions;
