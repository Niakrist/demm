import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import styles from "./LinkCart.module.css";

const LinkCart = () => {
  return (
    <Link className={styles.linkCart} to="/cart">
      <Icon name="cartIcon" className={styles.cartIcon} />
      <span className={styles.inCart}>2</span>
      Корзина
    </Link>
  );
};

export default LinkCart;
