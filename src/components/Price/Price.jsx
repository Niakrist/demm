import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementInCart,
  decrementInCart,
  removeFromCart,
  inputInCart,
  addByNow,
} from "../../store/cartSlice/cartSlice";
import { toggleModalByNow } from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";
import styles from "./Price.module.css";

const Price = ({ product, className, productCard }) => {
  const { inCart } = useSelector((state) => state.cart);
  const { byNow } = useSelector((state) => state.cart);
  const isInCart = inCart.find((item) => item.id === product.id);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(incrementInCart(product));
  };
  const handleRemoveClick = () => {
    if (isInCart.cart > 1) {
      dispatch(decrementInCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  };

  const handleChange = (e) => {
    let num = e.target.value;
    const regEx = /^(?!0)\d+$/;

    if (regEx.test(num)) {
      dispatch(inputInCart({ product, value: num }));
    }
  };

  const handleByNow = () => {
    dispatch(toggleModalByNow(true));
    dispatch(addByNow({ product, value: 1 }));
  };

  return (
    <div className={className}>
      <p className={productCard ? styles.price : styles.priceItem}>
        {product.price} руб./шт
      </p>
      <div className={styles.wrapper}>
        {isInCart ? (
          <div className={styles.cartWrapper}>
            <div
              className={productCard ? styles.btnGroups : styles.btnGroupsItem}>
              <button onClick={handleRemoveClick} className={styles.btn}>
                -
              </button>
              <input
                onChange={handleChange}
                className={styles.input}
                type="text"
                value={isInCart.cart}
              />
              <button onClick={handleAddClick} className={styles.btn}>
                +
              </button>
            </div>
            <p className={styles.quantity}>шт.</p>
          </div>
        ) : (
          <Button
            onClick={handleAddClick}
            className={productCard ? styles.cart : styles.cartItem}>
            В корзину
          </Button>
        )}
        <Button
          onClick={handleByNow}
          className={productCard ? styles.buy : styles.buyItem}>
          Купить в 1 клик
        </Button>
      </div>
    </div>
  );
};

export default Price;
