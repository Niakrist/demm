import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  toggleCategories,
  toggleCollections,
  toggleColors,
  toggleMinPrice,
  toggleMaxPrice,
  toggleMontage,
  toggleType,
  sortedFilter,
  toggleDirection,
  togglePage,
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
      console.log("filter.collection: ", filter.collection);
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
    if (filter.page) {
      params.page = filter.page;
    }
    if (filter.minprice) {
      params.minprice = filter.minprice;
    }
    if (filter.maxprice) {
      params.maxprice = filter.maxprice;
    }
    if (filter.sort) {
      params.sort = filter.sort;
    }
    if (filter.direction) {
      params.direction = filter.direction;
    }

    setSearchParams(params);
  }, [filter, setSearchParams]);

  const updateQueryParams = (key, value) => {
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
      case "page":
        dispatch(togglePage(value));
        break;
      case "minprice":
        dispatch(toggleMinPrice(value));
        break;
      case "maxprice":
        dispatch(toggleMaxPrice(value));
        break;
      case "sort":
        dispatch(sortedFilter(value));
        break;
      case "direction":
        dispatch(toggleDirection(value));
        break;
      default:
        break;
    }
  };

  return { updateQueryParams, searchParams, filter };
};
