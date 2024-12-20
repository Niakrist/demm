import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (searchText) => {
    const response = await fetch(
      `http://localhost:3024/api/goods?search=${searchText}`
    );
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    searchList: [],
    searchText: "",
    error: null,
  },
  reducers: {
    cleanSearchText: (state) => {
      state.searchText = "";
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchList = action.payload.goods;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { cleanSearchText, changeSearchText } = searchSlice.actions;

export default searchSlice.reducer;
