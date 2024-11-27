import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import { router } from "./components/Router/Router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
