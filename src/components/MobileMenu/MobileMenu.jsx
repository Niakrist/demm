import React from "react";
import styles from "./MobileMenu.module.css";
import logoSrc from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import LinkIcon from "../../ui/LinkIcon/LinkIcon";
import PhoneGroup from "../../ui/PhoneGroup/PhoneGroup";
import Button from "../../ui/Button/Button";
import LinkWhatsapp from "../../ui/LinkWhatsapp/LinkWhatsapp";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import DropDown from "../../ui/DropDown/DropDown";
import { useCategories } from "../../hooks/useCategories";

const MobileMenu = () => {
  const items = useCategories();

  if (!items) return;

  return (
    <section className={styles.wrapper}>
      <div className={styles.mobileMenu}>
        <div className={styles.burgerMenu}>
          <BurgerMenu />
        </div>

        <div className={styles.logo}>
          <img className={styles.logoImg} src={logoSrc} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.item}>
              <DropDown items={items} name="Каталог" type="link" />
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>Акции</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>О компании</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>Оплата и доставка</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>Магазины</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.user}>
          <li>
            <LinkIcon to="/cart" name="cartIcon" inCart={2}>
              Корзина
            </LinkIcon>
          </li>
          <li>
            <LinkIcon to="/user" name="userIcon">
              Личный кабинет
            </LinkIcon>
          </li>
        </ul>
        <PhoneGroup className={styles.phone} />
        <Button className={styles.btn}>Заказать звонок</Button>
        <LinkWhatsapp />
      </div>
    </section>
  );
};

export default MobileMenu;
