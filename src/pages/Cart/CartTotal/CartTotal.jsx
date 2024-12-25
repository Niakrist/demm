import React from "react";
import PrivacyPolicy from "../../../components/PrivacyPolicy/PrivacyPolicy";
import Button from "../../../ui/Button/Button";
import { getTotalPrice } from "../../../utils/getTotalPrice";

import styles from "./CartTotal.module.css";

const CartTotal = ({ inCart, costumerInfo, onChange, errors }) => {
  const formatter = new Intl.NumberFormat("ru-RU");

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
              id="cart"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
