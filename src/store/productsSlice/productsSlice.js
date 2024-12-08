import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryParams) => {
    const { page, category } = queryParams;

    const params = [];
    if (page) params.push(`page=${page}`);
    if (category) params.push(`category=${category}`);
    const queryString = params.length > 0 ? `/?${params.join("&")}` : "";

    try {
      const response = await fetch(
        `http://localhost:3024/api/goods${queryString}`
      );
      const data = await response.json();
      console.log("data: ", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: null,
    page: null,
    pages: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.products = null;
        state.page = null;
        state.pages = null;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.goods;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = null;
        state.page = null;
        state.pages = null;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
