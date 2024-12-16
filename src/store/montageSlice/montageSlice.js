import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMontage = createAsyncThunk(
  "montage/fetchMontage",
  async () => {
    const response = await fetch("http://localhost:3024/api/montage");
    const data = response.json();
    return data;
  }
);

const montageSlice = createSlice({
  name: "montage",
  initialState: {
    isLoading: false,
    montage: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMontage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMontage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.montage = action.payload;
      })
      .addCase(fetchMontage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default montageSlice.reducer;
