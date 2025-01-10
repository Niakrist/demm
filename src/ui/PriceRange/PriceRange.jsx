import React, { useRef } from "react";
import { useState } from "react";
import styles from "./PriceRange.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPrice } from "../../store/priceSlice/priceSlice";

import { useNavigate, useSearchParams } from "react-router-dom";
import {
  changeMaxPrice,
  changeMinPrice,
  resetFilter,
} from "../../store/filterSlice/filterSlice";

const PriceRange = () => {
  const { prices } = useSelector((state) => state.prices);
  const { min, max } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPrice());
  }, [dispatch]);

  const pricesArr = prices.map((item) => parseInt(item)).sort((a, b) => a - b);

  const minPrice = pricesArr[0];
  const maxPrice = pricesArr.at(-1);

  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      dispatch(changeMinPrice(minPrice));
      dispatch(changeMaxPrice(maxPrice));
      dispatch;
    }
  }, [minPrice, maxPrice]);

  if (!maxPrice) return;

  const handleMinChange = (e) => {
    const currentParams = new URLSearchParams(searchParams);

    let currentMin = e.target.value;
    if (Number(currentMin) < minPrice) {
      currentMin = Number(minPrice);
    }
    if (currentMin >= Number(max)) {
      currentMin = Number(max) - 1;
    }
    dispatch(changeMinPrice(currentMin));
    currentParams.set("minprice", currentMin);
    navigate({ search: currentParams.toString() });
  };

  const handleMaxChange = (e) => {
    const currentParams = new URLSearchParams(searchParams);
    let currentMax = e.target.value;
    if (Number(currentMax) < Number(min)) {
      currentMax = Number(min) + 1;
    }
    if (Number(currentMax) > maxPrice) {
      currentMax = maxPrice;
    }
    dispatch(changeMaxPrice(currentMax));
    currentParams.set("maxprice", currentMax);
    navigate({ search: currentParams.toString() });
  };

  const calcValue = (min, max) => {
    const maxValue = 100 - Math.ceil((max * 100) / maxPrice);
    const minValue = Math.floor((min * 100) / maxPrice);
    return [minValue, maxValue];
  };

  const [minValue, maxValue] = calcValue(min, max);

  return (
    <div className={styles.priceRange}>
      <h4 className={styles.title}>Цена, руб.</h4>
      <div className={styles.prices}>
        <input
          onChange={handleMinChange}
          className={styles.price}
          type="text"
          value={min}
        />
        <span>-</span>
        <input
          onChange={handleMaxChange}
          className={styles.price}
          type="text"
          value={max}
        />
      </div>
      <div className={styles.range}>
        <div style={{ left: `${minValue}%` }} className={styles.min}></div>
        <div
          style={{ left: `${minValue}%`, right: `${maxValue}%` }}
          className={styles.line}></div>
        <div style={{ right: `${maxValue}%` }} className={styles.max}></div>
      </div>
    </div>
  );
};

export default PriceRange;
