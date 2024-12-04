import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice/categoriesSlice";
import { transformObjectInArr } from "../utils/transformObjectInArr";

export const useCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  let category = transformObjectInArr(categories);

  return category;
};
