import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilter = createAsyncThunk("filter/fetchFilter", async () => {
  const response = await fetch("http://localhost:3024/api/goods");

  const data = await response.json();

  return data.goods;
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isLoading: false,
    filters: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, (state) => {
        console.log("ending: ");
        state.isLoading = true;
        state.filters = null;
        state.error = null;
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.isLoading = false;
        state.filters = action.payload;
        state.error = null;
      })
      .addCase(fetchFilter.rejected, (state, action) => {
        console.log("action: ", action);
        state.isLoading = false;
        state.filters = null;
        state.error = action.payload;
      });
  },
});
export default filterSlice.reducer;
