import { createSlice } from "@reduxjs/toolkit";
export const menuToggleSlice = createSlice({
  name: "menu",
  initialState: {
    isMenu: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenu = action.payload;
    },
  },
});

export const { toggleMenu } = menuToggleSlice.actions;

export default menuToggleSlice.reducer;
