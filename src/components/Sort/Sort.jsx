import React from "react";
import { clsx } from "../../utils/clsx";

import styles from "./Sort.module.css";

const Sort = () => {
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

      <select className={styles.select} name="" id="">
        <option value="">Сортировка</option>
        <option value="">По возрастанию</option>
        <option value="">По убыванию</option>
      </select>
    </div>
  );
};

export default Sort;
