import { configureStore } from "@reduxjs/toolkit";
import menuToggleSlice from "./menuSlice/menuToggleSlice";

export const store = configureStore({
  reducer: {
    menu: menuToggleSlice,
  },
});
