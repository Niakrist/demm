import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Presence.module.css";

const Presence = ({ product }) => {
  const quantity = product.quantity;

  return (
    <p className={styles.presence}>
      {quantity ? (
        <span className={styles.presenceYes}>
          <Icon className={styles.size} name="presenceYes" /> В наличии
        </span>
      ) : (
        <span className={styles.presenceNo}>
          <Icon className={styles.size} name="presenceNo" /> Нет в наличии
        </span>
      )}
      <span>Артикул: {product.id}</span>
    </p>
  );
};

export default Presence;
