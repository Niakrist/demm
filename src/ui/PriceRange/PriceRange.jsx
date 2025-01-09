import React, { useRef } from "react";
import { useState } from "react";
import styles from "./PriceRange.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPrice } from "../../store/priceSlice/priceSlice";
import { useQueryParam } from "../../hooks/useQueryParam";

const PriceRange = () => {
  const { prices } = useSelector((state) => state.prices);
  const dispatch = useDispatch();

  const { updateQueryParams, filter, searchParams } = useQueryParam();

  useEffect(() => {
    dispatch(fetchPrice());
  }, [dispatch]);

  const pricesArr = prices.map((item) => parseInt(item)).sort((a, b) => a - b);

  const minPrice = pricesArr[0];
  const maxPrice = pricesArr.at(-1);

  const [min, setMin] = useState("0");
  const [max, setMax] = useState("0");

  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      setMin(minPrice);
      setMax(maxPrice);
    }
  }, [minPrice, maxPrice]);

  if (!maxPrice) return;

  const handleMinChange = (e) => {
    let currentMin = e.target.value;
    if (Number(currentMin) < minPrice) {
      currentMin = Number(minPrice);
    }
    if (currentMin >= Number(max)) {
      currentMin = Number(max) - 1;
    }
    setMin(currentMin);
    updateQueryParams("minprice", currentMin);
  };

  const handleMaxChange = (e) => {
    let currentMax = e.target.value;
    if (Number(currentMax) < Number(min)) {
      currentMax = Number(min) + 1;
    }
    if (Number(currentMax) > maxPrice) {
      currentMax = maxPrice;
    }
    setMax(currentMax);
    updateQueryParams("maxprice", currentMax);
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
          className={styles.line}
        ></div>
        <div style={{ right: `${maxValue}%` }} className={styles.max}></div>
      </div>
    </div>
  );
};

export default PriceRange;
