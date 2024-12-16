import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTypes = createAsyncThunk("types/typesSlice", async () => {
  const response = await fetch("http://localhost:3024/api/types");
  const data = await response.json();
  return data;
});

const typesSlice = createSlice({
  name: "types",
  initialState: {
    isLoading: false,
    types: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default typesSlice.reducer;
