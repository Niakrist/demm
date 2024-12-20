import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Cart from "../../pages/Cart/Cart";
import Catalog from "../../pages/Catalog/Catalog";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";

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
    path: "/catalog",
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
