import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryParams) => {
    const params = new URLSearchParams(queryParams);

    try {
      const response = await fetch(
        `http://localhost:3024/api/goods/?${params.toString()}`
      );
      const data = await response.json();
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
    page: 1,
    pages: null,
    category: [],
    collection: [],
    color: [],
    montage: [],
    type: [],
    minprice: null,
    maxprice: null,
    error: null,
  },
  reducers: {
    toggleCategories: (state, action) => {
      if (state.category.includes(action.payload)) {
        state.category = state.category.filter((f) => f !== action.payload);
      } else {
        state.category.push(action.payload);
      }
    },
    toggleCollections: (state, action) => {
      if (state.collection.includes(action.payload)) {
        state.collection = state.collection.filter((f) => f !== action.payload);
      } else {
        state.collection.push(action.payload);
      }
    },
    toggleColors: (state, action) => {
      if (state.color.includes(action.payload)) {
        state.color = state.color.filter((f) => f !== action.payload);
      } else {
        state.color.push(action.payload);
      }
    },
    toggleMontage: (state, action) => {
      if (state.montage.includes(action.payload)) {
        state.montage = state.montage.filter((f) => f !== action.payload);
      } else {
        state.montage.push(action.payload);
      }
    },
    toggleType: (state, action) => {
      if (state.type.includes(action.payload)) {
        state.type = state.type.filter((f) => f !== action.payload);
      } else {
        state.type.push(action.payload);
      }
    },
    toggleMinPrice: (state, action) => {
      state.minprice = action.payload;
    },
    toggleMaxPrice: (state, action) => {
      state.maxprice = action.payload;
    },
    resetFilter: (state) => {
      state.page = 1;
      state.category = [];
      state.collection = [];
      state.color = [];
      state.montage = [];
      state.type = [];
      state.minprice = null;
      state.maxprice = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.products = null;
        state.page = 1;
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

export const {
  toggleCategories,
  toggleCollections,
  toggleColors,
  toggleMontage,
  toggleType,
  toggleMinPrice,
  toggleMaxPrice,
  resetFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
