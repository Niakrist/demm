import React from "react";
import PrivacyPolicy from "../../../components/PrivacyPolicy/PrivacyPolicy";
import Button from "../../../ui/Button/Button";

import styles from "./CartTotal.module.css";

const CartTotal = ({ inCart, costumerInfo, onChange, errors }) => {
  const formatter = new Intl.NumberFormat("ru-RU");

  const getTotalPrice = (inCart) => {
    const products = inCart.reduce(
      (acc, item) => (acc += Number(item.cart)),
      0
    );
    const totalPrice = inCart.reduce(
      (acc, item) => (acc += item.price * item.cart),
      0
    );
    let priceDelivery = 0;
    if (totalPrice > 100000) {
      priceDelivery = 0;
    } else if (totalPrice > 50000) {
      priceDelivery = 1500;
    } else {
      priceDelivery = 5000;
    }
    return [products, totalPrice, priceDelivery];
  };

  const [products, totalPrice, priceDelivery] = getTotalPrice(inCart);

  return (
    <div className={styles.cartTotal}>
      {!!inCart.length && (
        <div className={styles.cartTotalWrapper}>
          <ul className={styles.cartTotalList}>
            <li className={styles.cartTotalItem}>
              <span>Итого</span>
              <span>{`${formatter.format(
                priceDelivery + totalPrice
              )} руб.`}</span>
            </li>
            <li className={styles.cartTotalItem}>
              <span>
                Товары, <strong>{formatter.format(products)}</strong> шт.
              </span>
              <span>{`${formatter.format(totalPrice)} руб.`}</span>
            </li>
            <li className={styles.cartTotalItem}>
              <span>Скидка</span>
              <span>0</span>
            </li>
            <li className={styles.cartTotalItem}>
              <span>Доставка</span>
              <span>
                {!!priceDelivery
                  ? `${formatter.format(priceDelivery)} руб.`
                  : "Бесплатно"}
              </span>
            </li>
            <li className={styles.cartTotalItem}>
              <span>Дата</span>
              <span>20 декабря - 23 декабря</span>
            </li>
            <li className={styles.cartTotalItem}>
              <span>Оплата</span>
              <span>Картой</span>
            </li>
          </ul>
          <Button form="cartFrom" className={styles.btnSend}>
            Оформить заказ
          </Button>
          <div className={styles.privacyPolicy}>
            <PrivacyPolicy
              className={styles.color}
              privacyPolicy={costumerInfo}
              onChange={onChange}
              errors={errors}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
