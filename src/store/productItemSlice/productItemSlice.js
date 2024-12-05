import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductItem = createAsyncThunk(
  "productItem/fetchProductItem",
  async (id) => {
    try {
      const response = await fetch(`http://localhost:3024/api/goods/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {}
  }
);

const productItemSlice = createSlice({
  name: "productItem",
  initialState: {
    isLoading: false,
    productItem: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProductItem.pending, (state) => {
        state.isLoading = true;
        state.productItem = null;
        state.error = null;
      })
      .addCase(fetchProductItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productItem = action.payload;
        state.error = null;
      })
      .addCase(fetchProductItem.rejected, (state, action) => {
        state.isLoading = false;
        state.productItem = null;
        state.error = action.payload;
      }),
});

export default productItemSlice.reducer;
