import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  changeMaxPrice,
  changeMinPrice,
  resetFilter,
} from "../store/filterSlice/filterSlice";

export const useResetFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { prices } = useSelector((state) => state.prices);

  const pricesArr = prices?.map((item) => parseInt(item)).sort((a, b) => a - b);
  const minPrice = pricesArr?.[0];
  const maxPrice = pricesArr?.at(-1);
  const handleReset = useCallback(() => {
    const currentParams = new URLSearchParams(searchParams);
    dispatch(resetFilter());
    if (minPrice && maxPrice) {
      dispatch(changeMinPrice(minPrice));
      dispatch(changeMaxPrice(maxPrice));
    }

    navigate({ search: currentParams.toString() });
  }, [dispatch, minPrice, maxPrice, navigate, searchParams]);

  return handleReset;
};
