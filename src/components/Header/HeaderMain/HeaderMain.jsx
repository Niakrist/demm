import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import logoSrc from "../../../assets/images/logo.png";
import styles from "./HeaderMain.module.css";
import Search from "../../../ui/Search/Search";
import Button from "../../../ui/Button/Button";

const HeaderMain = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.wrapper}>
        <Link className={styles.link} to="/">
          <img className={styles.logoImg} src={logoSrc} alt="Логотип Demm" />
        </Link>
        <Search />
        <div className={styles.communication}>
          <div className={styles.phoneWrapper}>
            <a className={styles.tel} href="tel:799999999">
              +7 999 999-99-99
            </a>
            <p className={styles.time}>
              <span className={styles.open} />
              Звоните с 8:10 до 18:10
            </p>
          </div>
          <Button className={styles.btn}>Заказать звонок</Button>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMain;
