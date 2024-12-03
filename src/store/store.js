import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice/categoriesSlice";
import filterSlice from "./filterSlice/filterSlice";

import menuToggleSlice from "./menuSlice/menuToggleSlice";
import productsSlice from "./productsSlice/productsSlice";

export const store = configureStore({
  reducer: {
    menu: menuToggleSlice,
    filter: filterSlice,
    categories: categoriesSlice,
    products: productsSlice,
  },
});
