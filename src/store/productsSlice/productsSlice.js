import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryParams) => {
    const params = new URLSearchParams(queryParams);
    try {
      const response = await fetch(
        params.get("category")
          ? `http://localhost:3024/api/goods/?category=${params.get(
              "category"
            )}`
          : `http://localhost:3024/api/goods/?${params.toString()}`
      );

      const paramsObj = Object.fromEntries(params);

      console.log("paramsObj: ", paramsObj);

      const data = await response.json();
      return { ...data, paramsObj };
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
    sort: "",
    direction: "",
    error: null,
  },
  reducers: {
    toggleCategories: (state, action) => {
      if (state.category.includes(action.payload)) {
        state.category = state.category.filter((f) => f !== action.payload);
      } else {
        state.category.push(action.payload);
      }
      state.page = 1;
    },
    toggleCollections: (state, action) => {
      if (state.collection.includes(action.payload)) {
        state.collection = state.collection.filter((f) => f !== action.payload);
      } else {
        state.collection.push(action.payload);
      }
      state.page = 1;
    },
    toggleColors: (state, action) => {
      if (state.color.includes(action.payload)) {
        state.color = state.color.filter((f) => f !== action.payload);
      } else {
        state.color.push(action.payload);
      }
      state.page = 1;
    },
    toggleMontage: (state, action) => {
      if (state.montage.includes(action.payload)) {
        state.montage = state.montage.filter((f) => f !== action.payload);
      } else {
        state.montage.push(action.payload);
      }
      state.page = 1;
    },
    toggleType: (state, action) => {
      if (state.type.includes(action.payload)) {
        state.type = state.type.filter((f) => f !== action.payload);
      } else {
        state.type.push(action.payload);
      }
      state.page = 1;
    },
    togglePage: (state, action) => {
      state.page = action.payload;
    },
    toggleMinPrice: (state, action) => {
      state.minprice = action.payload;
      state.page = 1;
    },
    toggleMaxPrice: (state, action) => {
      state.maxprice = action.payload;
      state.page = 1;
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
      state.sort = "";
      state.direction = "";
    },
    sortedFilter: (state, action) => {
      state.sort = action.payload;
    },
    toggleDirection: (state, action) => {
      state.direction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.pages = null;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("action: ", action.payload);

        console.log("action: ", action.payload.paramsObj.collection);
        state.isLoading = false;
        state.products = action.payload.goods;
        state.page = action.payload.page;
        state.pages = action.payload.pages;

        // state.collection = action.payload.paramsObj.collection
        //   ? state.collection.push("VANITY")
        //   : [];

        // state.products = action.payload.goods;
        // state.page = action.payload.paramsObj.page || action.payload.page;
        // state.pages = action.payload.pages;
        // // state.category = action.payload.paramsObj.category || null;
        // state.collection = action.payload.paramsObj.collection || [];
        // state.color = action.payload.paramsObj.color || [];
        // state.montage = action.payload.paramsObj.montage || [];
        // state.type = action.payload.paramsObj.type || [];
        // state.minprice = action.payload.paramsObj.minprice || null;
        // state.maxprice = action.payload.paramsObj.maxprice || null;
        // state.sort = "";
        // state.direction = action.payload.paramsObj.direction || "";
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        // state.products = null;
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
  togglePage,
  toggleMinPrice,
  toggleMaxPrice,
  resetFilter,
  sortedFilter,
  toggleDirection,
} = productsSlice.actions;

export default productsSlice.reducer;
