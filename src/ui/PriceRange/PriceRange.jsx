import React from "react";
import styles from "./PriceRange.module.css";

const PriceRange = () => {
  return (
    <div className={styles.priceRange}>
      <h4 className={styles.title}>Цена, руб.</h4>
      <div className={styles.prices}>
        <input className={styles.price} type="text" value={10} />
        <span>-</span>
        <input className={styles.price} type="text" value={50} />
      </div>
      <div className={styles.range}>
        <div className={styles.min}></div>
        <div className={styles.max}></div>
      </div>
    </div>
  );
};

export default PriceRange;
