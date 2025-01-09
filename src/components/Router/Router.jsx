import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Cart from "../../pages/Cart/Cart";
import Catalog from "../../pages/Catalog/Catalog";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import DeliveryAndPayment from "../../pages/DeliveryAndPayment/DeliveryAndPayment";
import AboutShop from "../../pages/AboutShop/AboutShop";
import Contacts from "../../pages/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/delivery-and-payment",
    element: <DeliveryAndPayment />,
  },
  {
    path: "/shop",
    element: <AboutShop />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/category:/id",
    element: <Catalog />,
  },
  {
    path: "/catalog/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
