import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchColors = createAsyncThunk("colors/fetchColors", async () => {
  const response = await fetch("http://localhost:3024/api/colors");
  const data = await response.json();
  return data;
});

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    isLoading: false,
    colors: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.colors = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.isLoading = false;
        state.colors = [];
        state.error = action.payload;
      });
  },
});

export default colorsSlice.reducer;
