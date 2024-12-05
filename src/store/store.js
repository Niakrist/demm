import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice/cartSlice";
import categoriesSlice from "./categoriesSlice/categoriesSlice";
import filterSlice from "./filterSlice/filterSlice";

import menuToggleSlice from "./menuSlice/menuToggleSlice";
import productItemSlice from "./productItemSlice/productItemSlice";
import productsSlice from "./productsSlice/productsSlice";

export const store = configureStore({
  reducer: {
    menu: menuToggleSlice,
    filter: filterSlice,
    categories: categoriesSlice,
    products: productsSlice,
    productItem: productItemSlice,
    cart: cartSlice,
  },
});
