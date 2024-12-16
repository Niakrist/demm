import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  toggleCategories,
  toggleCollections,
  toggleColors,
  toggleMontage,
  toggleType,
} from "../store/productsSlice/productsSlice";

export const useQueryParam = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {};
    if (filter.category?.length > 0) {
      params.category = filter.category.join(",");
    }
    if (filter.collection?.length > 0) {
      params.collection = filter.collection.join(",");
    }
    if (filter.color?.length > 0) {
      params.color = filter.color.join(",");
    }
    if (filter.montage?.length > 0) {
      params.montage = filter.montage.join(",");
    }
    if (filter.type?.length > 0) {
      params.type = filter.type.join(",");
    }

    setSearchParams(params);
  }, [filter, setSearchParams]);

  const updateQueryParams = (key, value) => {
    console.log("category: ", key, value);
    switch (key) {
      case "category":
        dispatch(toggleCategories(value));
        break;
      case "collection":
        dispatch(toggleCollections(value));
        break;
      case "color":
        dispatch(toggleColors(value));
        break;
      case "montage":
        dispatch(toggleMontage(value));
        break;
      case "type":
        dispatch(toggleType(value));
        break;
      default:
        break;
    }
  };

  return { updateQueryParams, searchParams, filter };
};
