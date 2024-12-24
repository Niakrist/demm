import { createSlice } from "@reduxjs/toolkit";

export const orderDataSlice = createSlice({
  name: "orderData",
  initialState: {
    orderData: {},
  },
  reducers: {
    addOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    clearOrderData: (state) => {
      state.orderData = {};
    },
  },
});

export const { addOrderData, clearOrderData } = orderDataSlice.actions;

export default orderDataSlice.reducer;
