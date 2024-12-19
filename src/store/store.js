import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice/cartSlice";
import categoriesSlice from "./categoriesSlice/categoriesSlice";
import menuToggleSlice from "./menuSlice/menuToggleSlice";
import productItemSlice from "./productItemSlice/productItemSlice";
import productsSlice from "./productsSlice/productsSlice";
import colorsSlice from "./colorsSLice/colorsSlice";
import collectionsSlice from "./collectionsSlice/collectionsSlice";
import montageSlice from "./montageSlice/montageSlice";
import typesSlice from "./typesSlice/typesSlice";
import priceSlice from "./priceSlice/priceSlice";
import modalSlice from "./modalSlice/modalSlice";

export const store = configureStore({
  reducer: {
    menu: menuToggleSlice,
    categories: categoriesSlice,
    products: productsSlice,
    productItem: productItemSlice,
    cart: cartSlice,
    colors: colorsSlice,
    collections: collectionsSlice,
    montage: montageSlice,
    types: typesSlice,
    prices: priceSlice,
    isModal: modalSlice,
  },
});
