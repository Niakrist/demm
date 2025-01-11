import React from "react";
import { useDispatch } from "react-redux";
import { toggleFilterModal } from "../../store/modalSlice/modalSlice";
import Filter from "../Filter/Filter";
import Icon from "../Icon/Icon";

import styles from "./MobileFilter.module.css";

const MobileFilter = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleFilterModal(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <Icon name="filterIcon" className={styles.mobileFilterIcon} />
            <h2 className={styles.title}>Фильтр</h2>
          </div>
          <button onClick={handleClose} className={styles.colse}></button>
        </div>
        <div className={styles.mobileFilter}>
          <Filter mobile />
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
