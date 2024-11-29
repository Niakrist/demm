import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./LinkCart.module.css";

const LinkCart = ({ className }) => {
  return (
    <Link className={clsx(styles.linkCart, className)} to="/cart">
      <Icon name="cartIcon" className={styles.cartIcon} />
      <span className={styles.inCart}>2</span>
      Корзина
    </Link>
  );
};

export default LinkCart;
