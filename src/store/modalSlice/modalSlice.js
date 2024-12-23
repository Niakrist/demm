import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShowModal: false,
    isOrderModal: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isShowModal = action.payload;
    },
    toggleOrderModal: (state, action) => {
      state.isOrderModal = action.payload;
    },
  },
});

export const { toggleModal, toggleOrderModal } = modalSlice.actions;

export default modalSlice.reducer;
