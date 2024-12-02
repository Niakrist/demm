import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./DropDown.module.css";

const DropDown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const handleToggle = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };
  return (
    <>
      <button onClick={handleToggle} className={styles.dropDown}>
        Каталог{" "}
        <Icon
          name="dropDownIcon"
          className={clsx(
            styles.dropDownIcon,
            isOpenDropDown && styles.dropDownIconActive
          )}
        />
      </button>

      <ul className={styles.dropDownList}>
        {isOpenDropDown && (
          <>
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
          </>
        )}
      </ul>
    </>
  );
};

export default DropDown;
