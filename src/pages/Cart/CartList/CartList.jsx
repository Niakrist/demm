import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementInCart,
  incrementInCart,
  inputInCart,
  removeFromCart,
} from "../../../store/cartSlice/cartSlice";

import styles from "./CartList.module.css";

const CartList = ({ inCart }) => {
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("ru-RU");

  const handleIncrement = (item) => {
    dispatch(incrementInCart(item));
  };

  const handleDecrement = (item) => {
    if (item.cart > 1) {
      dispatch(decrementInCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleChangeQuantity = (e, product) => {
    let num = e.target.value;
    const regEx = /^(?!0)\d+$/;
    if (regEx.test(num)) {
      dispatch(inputInCart({ product, value: num }));
    }
  };

  return (
    <ul className={styles.cartList}>
      {inCart.map((item) => (
        <li key={item.id} className={styles.item}>
          <article className={styles.card}>
            <img
              className={styles.img}
              src={`http://localhost:3024/img/${item.img_src}`}
              alt=""
            />
            <div className={styles.info}>
              <Link to={`/catalog/${item.id}`} className={styles.infoTitle}>
                {item.title}
              </Link>
              <p className={styles.infoArticle}>Артикул: {item.id}</p>
            </div>
            <div className={styles.controls}>
              <div className={styles.quantity}>
                <button
                  onClick={() => handleDecrement(item)}
                  className={styles.btn}>
                  -
                </button>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => handleChangeQuantity(e, item)}
                  value={formatter.format(item.cart)}
                />
                <button
                  onClick={() => handleIncrement(item)}
                  className={styles.btn}>
                  +
                </button>
              </div>
              <p className={styles.price}>
                {formatter.format(item.cart * item.price)} р.
              </p>
              <button
                onClick={() => handleRemove(item)}
                className={styles.del}></button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
