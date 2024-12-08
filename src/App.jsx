import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";
import { fetchCategories } from "./store/categoriesSlice/categoriesSlice";
import { fetchProducts } from "./store/productsSlice/productsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
