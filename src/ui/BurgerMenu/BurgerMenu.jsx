import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./BurgerMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../store/menuSlice/menuToggleSlice";

const BurgerMenu = () => {
  const { isMenu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu(!isMenu));
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={clsx(styles.lineTop, isMenu && styles.open)} />
      <span className={clsx(styles.lineMedium, isMenu && styles.open)} />
      <span className={clsx(styles.lineBottom, isMenu && styles.open)} />
    </button>
  );
};

export default BurgerMenu;
