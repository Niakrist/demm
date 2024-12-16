import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async () => {
    const response = await fetch("http://localhost:3024/api/collections");
    const data = await response.json();
    return data;
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    isLoading: false,
    collections: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.isLoading = false;
        state.collections = action.payload;
        state.error = null;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.isLoading = false;
        state.collections = [];
        state.error = action.payload;
      });
  },
});

export default collectionsSlice.reducer;
