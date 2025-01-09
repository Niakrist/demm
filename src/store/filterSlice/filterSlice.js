import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionParams: [],
  colorParams: [],
  montageParams: [],
  typeParams: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCollectionParams: (state, action) => {
      state.collectionParams = state.collectionParams.includes(action.payload)
        ? state.collectionParams.filter((param) => param !== action.payload)
        : [...state.collectionParams, action.payload];
    },
    toggleColorParams: (state, action) => {
      state.colorParams = state.colorParams.includes(action.payload)
        ? state.colorParams.filter((param) => param !== action.payload)
        : [...state.colorParams, action.payload];
    },
    toggleMontageParams: (state, action) => {
      console.log("action: ", action);
      state.montageParams = state.montageParams.includes(action.payload)
        ? state.montageParams.filter((param) => param !== action.payload)
        : [...state.montageParams, action.payload];
    },
    toggleTypeParams: (state, action) => {
      state.typeParams = state.typeParams.includes(action.payload)
        ? state.typeParams.filter((param) => param !== action.payload)
        : [...state.typeParams, action.payload];
    },
  },
});

export const {
  toggleCollectionParams,
  toggleColorParams,
  toggleMontageParams,
  toggleTypeParams,
} = filterSlice.actions;

export default filterSlice.reducer;
