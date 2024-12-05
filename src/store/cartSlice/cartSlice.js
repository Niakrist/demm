import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    inCart: [],
  },
  reducers: {
    incrementInCart: (state, action) => {
      const product = state.inCart.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        state.inCart = state.inCart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, cart: Number(item.cart) + 1 };
          } else {
            return item;
          }
        });
      } else {
        state.inCart.push({ ...action.payload, cart: 1 });
      }
    },
    decrementInCart: (state, action) => {
      const product = state.inCart.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        state.inCart = state.inCart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, cart: Number(item.cart) - 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      state.inCart = state.inCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    inputInCart: (state, action) => {
      const { product, value } = action.payload;
      state.inCart = state.inCart.map((item) =>
        item.id === product.id ? { ...item, cart: value } : item
      );
    },
  },
});

export const { incrementInCart, decrementInCart, removeFromCart, inputInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
