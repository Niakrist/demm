import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";
import { fetchCategories } from "./store/categoriesSlice/categoriesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const getDeliveryDate = () => {
    const data = new Date();
    console.log(data.getMonth());
    console.log(data.getDate());
  };

  getDeliveryDate();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
