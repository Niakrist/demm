import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShowModal: false,
    isOrderModal: false,
    isModalByNow: false,
    isFilterModal: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isShowModal = action.payload;
    },
    toggleOrderModal: (state, action) => {
      state.isOrderModal = action.payload;
    },
    toggleModalByNow: (state, action) => {
      state.isModalByNow = action.payload;
    },
    toggleFilterModal: (state, action) => {
      state.isFilterModal = action.payload;
    },
  },
});

export const {
  toggleModal,
  toggleOrderModal,
  toggleModalByNow,
  toggleFilterModal,
} = modalSlice.actions;

export default modalSlice.reducer;
