import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";

import styles from "./DropDown.module.css";

const DropDown = () => {
  return (
    <>
      <button className={styles.dropDown}>
        Каталог <Icon name="dropDownIcon" className={styles.dropDownIcon} />
      </button>
      <ul className={styles.dropDownList}>
        <li className={styles.dropDownItem}>
          <Link className={styles.dropDownLink}>Смесители</Link>
        </li>
        <li className={styles.dropDownItem}>
          <Link className={styles.dropDownLink}>Душевые системы</Link>
        </li>
        <li className={styles.dropDownItem}>
          <Link className={styles.dropDownLink}>Душевые стойки</Link>
        </li>
        <li className={styles.dropDownItem}>
          <Link className={styles.dropDownLink}>Изливы</Link>
        </li>
        <li className={styles.dropDownItem}>
          <Link className={styles.dropDownLink}>Аксессуары</Link>
        </li>
      </ul>
    </>
  );
};

export default DropDown;
