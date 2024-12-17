import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPrice = createAsyncThunk("price/fetchPrice", async () => {
  const response = await fetch("http://localhost:3024/api/prices");
  const data = await response.json();
  return data;
});
const priceSlice = createSlice({
  name: "price",
  initialState: {
    prices: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrice.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.prices = action.payload;
      })
      .addCase(fetchPrice.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default priceSlice.reducer;
