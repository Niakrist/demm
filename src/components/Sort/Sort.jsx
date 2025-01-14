import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import DropDown from "../../ui/DropDown/DropDown";
import FilterButton from "../../ui/FilterButton/FilterButton";
import ResetFilter from "../../ui/ResetFilter/ResetFilter";
import Filter from "../Filter/Filter";
import styles from "./Sort.module.css";

const Sort = () => {
  // const { direction } = useSelector((state) => state.products);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const urlParams = new URLSearchParams(location?.search);
  const params = Object.fromEntries(urlParams);
  const direction = params?.direction || "default";

  const handleChange = ({ target }) => {
    if (target.value !== "default") {
      const currentParams = new URLSearchParams(searchParams);
      currentParams.set("sort", "price");
      currentParams.set("direction", target.value);
      navigate({ search: currentParams.toString() });
    }
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortBtnsGroup}>
        <FilterButton />
        <input className={styles.input} id="new" type="checkbox" />
        <label className={styles.label} htmlFor="new">
          Новинки
        </label>
        <input className={styles.input} id="stock" type="checkbox" />
        <label className={styles.label} htmlFor="stock">
          Акционные товары
        </label>
        <input className={styles.input} id="hit" type="checkbox" />
        <label className={styles.label} htmlFor="hit">
          Хиты продаж
        </label>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.resetFilter}>
          <ResetFilter />
        </div>
        <select
          value={direction}
          onChange={handleChange}
          className={styles.select}
          name=""
          id="">
          <option disabled value="default">
            Сортировка
          </option>
          <option value="up">По возрастанию</option>
          <option value="down">По убыванию</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
