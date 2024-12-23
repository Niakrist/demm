import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleOrderModal } from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";

import styles from "./OrderModal.module.css";
const OrderModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(toggleOrderModal(false));
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.order}>
        <h2 className={styles.title}>Заказ успешно отправлен</h2>
        <p className={styles.subTitle}>Данные о доставке</p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span>ФИО</span>
            <span>ФИО</span>
          </li>
          <li className={styles.item}>
            <span>Телефон</span>
            <span>ФИО</span>
          </li>
          <li className={styles.item}>
            <span>Город</span>
            <span>ФИО</span>
          </li>
          <li className={styles.item}>
            <span>Индекс</span>
            <span>ФИО</span>
          </li>
          <li className={styles.item}>
            <span>Улица, дом</span>
            <span>ФИО</span>
          </li>
          <li className={styles.item}>
            <span>Квартира</span>
            <span>ФИО</span>
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
    </div>
  );
};

export default OrderModal;
