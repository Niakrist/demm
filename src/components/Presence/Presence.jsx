import React from "react";
import styles from "./Presence.module.css";

const Presence = ({ product }) => {
  return (
    <p className={styles.presence}>
      <span>Нет в наличии</span>
      <span>Артикул: {product.id}</span>
    </p>
  );
};

export default Presence;
