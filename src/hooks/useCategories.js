import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice/categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  let category = [];
  for (const eleme in categories) {
    category.push({ id: eleme, name: categories[eleme] });
  }

  return category;
};
