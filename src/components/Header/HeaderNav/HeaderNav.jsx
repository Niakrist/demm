import React from "react";
import { Link } from "react-router-dom";
import LinkCart from "../../../ui/LinkCart/LinkCart";
import Container from "../../Container/Container";
import Icon from "../../Icon/Icon";
import styles from "./HeaderNav.module.css";
const HeaderNav = () => {
  return (
    <div className={styles.nav}>
      <Container className={styles.wrapper}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.stock} to="/">
                <Icon name="stockIcon" className={styles.stockIcon} />
                Акции
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Смесители
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Душевые системы
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Душевые стойки
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Изливы
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Аксессуары
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.linkCart}>
          <LinkCart />
        </div>
      </Container>
    </div>
  );
};

export default HeaderNav;
