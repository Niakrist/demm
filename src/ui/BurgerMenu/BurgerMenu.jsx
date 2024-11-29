import React, { useState } from "react";
import { clsx } from "../../utils/clsx";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={clsx(styles.lineTop, isOpenMenu && styles.open)} />
      <span className={clsx(styles.lineMedium, isOpenMenu && styles.open)} />
      <span className={clsx(styles.lineBottom, isOpenMenu && styles.open)} />
    </button>
  );
};

export default BurgerMenu;
