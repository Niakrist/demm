import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./LinkCart.module.css";

const LinkCart = ({ className }) => {
  const { inCart } = useSelector((state) => state.cart);

  return (
    <Link className={clsx(styles.linkCart, className)} to="/cart">
      <Icon name="cartIcon" className={styles.cartIcon} />
      {!!inCart.length && (
        <span className={styles.inCart}>{inCart.length}</span>
      )}
      Корзина
    </Link>
  );
};

export default LinkCart;
