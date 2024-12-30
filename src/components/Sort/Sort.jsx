import React from "react";
import { useSelector } from "react-redux";
import { useQueryParam } from "../../hooks/useQueryParam";
import styles from "./Sort.module.css";

const Sort = () => {
  const { sort, direction } = useSelector((state) => state.products);

  const { updateQueryParams, filter, searchParams } = useQueryParam();

  const handleChange = ({ target }) => {
    if (target.value !== "Сортировка") {
      updateQueryParams("sort", "price");
      updateQueryParams("direction", target.value);
    }
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortBtnsGroup}>
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
        {/* <button className={clsx(styles.new, styles.active)}></button>
        <button className={styles.stock}></button>
        <button className={styles.hit}></button> */}
      </div>

      <select
        value={direction}
        onChange={handleChange}
        className={styles.select}
        name=""
        id=""
      >
        <option disabled value={""}>
          Сортировка
        </option>
        <option value="up">По возрастанию</option>
        <option value="down">По убыванию</option>
      </select>
    </div>
  );
};

export default Sort;
