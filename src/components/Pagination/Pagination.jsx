import React from "react";
import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const { page, pages } = useSelector((state) => state.products);

  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <ul className={styles.list}>
      {pagesArray.map((p) => (
        <li
          key={p}
          className={clsx(styles.item, page === p && styles.itemActive)}>
          <button className={styles.btn}>{p}</button>
        </li>
      ))}
      <li>
        <Button className={styles.btnNext}>
          <Icon name="iconArrow" className={styles.iconArrow} />
        </Button>
      </li>
    </ul>
  );
};

export default Pagination;
