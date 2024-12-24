import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cartSlice/cartSlice";
import { toggleOrderModal } from "../../store/modalSlice/modalSlice";
import { clearOrderData } from "../../store/orderDataSlice/orderDataSlice";
import Button from "../../ui/Button/Button";

import styles from "./OrderModal.module.css";
const OrderModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orderData } = useSelector((state) => state.order);

  console.log("orderData: ", orderData);

  const handleClick = () => {
    dispatch(toggleOrderModal(false));
    dispatch(clearOrderData());
    dispatch(clearCart());
    navigate("/");
  };

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
        </ul>
        <div className={styles.orderPrice}>
          <span>К оплате</span>
          <span>100</span>
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
