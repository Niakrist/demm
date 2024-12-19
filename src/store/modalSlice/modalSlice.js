import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShowModal: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isShowModal = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
