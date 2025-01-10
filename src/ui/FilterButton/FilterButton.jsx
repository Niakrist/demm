import React from "react";
import { useDispatch } from "react-redux";
import Icon from "../../components/Icon/Icon";
import { toggleFilterModal } from "../../store/modalSlice/modalSlice";

import styles from "./FilterButton.module.css";

const FilterButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFilterModal(true));
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <Icon name="categoryIcon" className={styles.categoryIcon} />
      <span>Категория</span>
      <Icon name="iconArrow" className={styles.iconArrow} />
    </button>
  );
};

export default FilterButton;
