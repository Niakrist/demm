import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./Price.module.css";

const Price = ({ product }) => {
  return (
    <div className={styles.priceWrapper}>
      <p className={styles.price}>{product.price} руб./шт</p>
      <Button className={styles.cart}>В корзину</Button>
      <Button className={styles.buy}>Купить в 1 клик</Button>
    </div>
  );
};

export default Price;
