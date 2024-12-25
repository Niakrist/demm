import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useKeypress } from "../../hooks/useKeypress";
import { clearCart } from "../../store/cartSlice/cartSlice";
import { toggleOrderModal } from "../../store/modalSlice/modalSlice";
import {
  addOrderData,
  clearOrderData,
} from "../../store/orderDataSlice/orderDataSlice";
import Button from "../../ui/Button/Button";
import { getTotalPrice } from "../../utils/getTotalPrice";

import styles from "./OrderModal.module.css";
const OrderModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orderData } = useSelector((state) => state.order);
  const { inCart } = useSelector((state) => state.cart);

  const [products, totalPrice, priceDelivery] = getTotalPrice(inCart);

  const handleClick = () => {
    dispatch(toggleOrderModal(false));
    dispatch(clearOrderData());
    dispatch(clearCart());
    navigate("/");
  };

  useKeypress("Escape", handleClick);

  const formatter = new Intl.NumberFormat("ru-RU");

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.order}>
        <h2 className={styles.title}>Заказ успешно отправлен</h2>
        <p className={styles.subTitle}>Данные о доставке</p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span>ФИО</span>
            <span>{orderData.name}</span>
          </li>
          <li className={styles.item}>
            <span>Телефон</span>
            <span>{orderData.phone}</span>
          </li>
          <li className={styles.item}>
            <span>E-mail</span>
            <span>{orderData.email}</span>
          </li>
          <li className={styles.item}>
            <span>Город</span>
            <span>{orderData.city}</span>
          </li>
          <li className={styles.item}>
            <span>Улица, дом</span>
            <span>{orderData.street}</span>
          </li>
          <li className={styles.item}>
            <span>Квартира</span>
            <span>{orderData.flat}</span>
          </li>
          <li className={styles.item}>
            <span>Товаров</span>
            <span>{products} шт</span>
          </li>
          <li className={styles.item}>
            <span>Доставка</span>
            <span>
              {priceDelivery
                ? `${formatter.format(priceDelivery)} руб.`
                : "Бесплатно"}
            </span>
          </li>
        </ul>
        <div className={styles.orderPrice}>
          <span>К оплате</span>
          <span>{formatter.format(totalPrice + priceDelivery)} руб.</span>
        </div>
        <Button onClick={handleClick} className={styles.btn}>
          На главную
        </Button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default OrderModal;
