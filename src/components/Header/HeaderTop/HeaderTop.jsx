import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import Icon from "../../Icon/Icon";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div className={styles.top}>
      <Container className={styles.wrapper}>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} to="/about">
                О компании
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/delivery-and-payment">
                Оплата и доставка
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/shop">
                Магазины
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>
          <Icon name="userIcon" className={styles.userIcon} />{" "}
          <span>Личный кабинет</span>
        </button>
      </Container>
    </div>
  );
};

export default HeaderTop;
