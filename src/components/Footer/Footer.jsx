import React, { useState } from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

import logoSrc from "../../assets/images/logo.png";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import IconArrow from "../Icon/icons/IconArrow";
import { clsx } from "../../utils/clsx";

const Footer = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };
  const handleBlur = () => {
    setIsActiveInput(false);
  };

  return (
    <footer>
      <div className={styles.footer}>
        <Container className={styles.up}>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img className={styles.logoImg} src={logoSrc} alt="Logo" />
              <a
                className={styles.linkWhatsapp}
                href="https://wa.me/+79999999999">
                <Icon name="whatsapp" className={styles.whatsapp} />{" "}
                <span>Написать в WhatsApp</span>
              </a>
            </div>
            <div className={styles.nav}>
              <h3 className={styles.title}>Каталог</h3>
              <ul>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Смесители
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Душевые системы
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Душевые стойки
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Изливы
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Аксессуары
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.nav}>
              <h3 className={styles.title}>Для клиента</h3>
              <ul>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Акции
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    О компании
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Оплата и доставка
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Магазины
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.feedback}>
              <div className={styles.feedbackWrapper}>
                <p className={styles.feedbackText}>
                  Узнавайте об акциях и новостях первыми, подпишитесь на
                  рассылку
                </p>
                <form
                  className={clsx(
                    styles.form,
                    isActiveInput && styles.formActive
                  )}>
                  <label className={styles.label}>
                    <input
                      placeholder="Электронная почта"
                      className={styles.input}
                      type="text"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </label>
                  <Button className={styles.button}>
                    Подписаться{" "}
                    <IconArrow name="iconArrow" className={styles.iconArrow} />
                  </Button>
                </form>

                <a className={styles.phone} href="tel:+79999999999">
                  +7 999 999-99-99
                </a>
                <address className={styles.address}>
                  <Icon name="address" className={styles.addressIcon} /> г.
                  Новосибирск, улица, дом, офис
                </address>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.copyrights}>
        <Container>
          <div className={styles.wrapperCopy}>
            <p className={styles.copyText}>© DEMM RUBINETTERIA 2023</p>
            <Link className={styles.copyLink} to="">
              Договор оферты
            </Link>
            <Link className={styles.copyLink} to="">
              Пользовательское соглашение
            </Link>
            <div className={styles.empty} />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
