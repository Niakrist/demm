import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
