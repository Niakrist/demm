import { useState } from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

import logoSrc from "../../assets/images/logo.png";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import IconArrow from "../Icon/icons/IconArrow";
import { clsx } from "../../utils/clsx";
import LinkWhatsapp from "../../ui/LinkWhatsapp/LinkWhatsapp";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useSelector } from "react-redux";

const Footer = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };
  const handleBlur = () => {
    setIsActiveInput(false);
  };

  const { isMenu } = useSelector((state) => state.menu);

  return (
    <footer>
      <div className={styles.footer}>
        <Container className={styles.up}>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img className={styles.logoImg} src={logoSrc} alt="Logo" />
            </div>
            <LinkWhatsapp className={styles.linkWhatsapp} />
            {/* <a
              className={styles.linkWhatsapp}
              href="https://wa.me/+79999999999"
              target="_blank">
              <Icon name="whatsapp" className={styles.whatsapp} />{" "}
              <span>Написать в WhatsApp</span>
            </a> */}
            <div className={styles.navFirst}>
              <h3 className={styles.title}>Каталог</h3>
              <ul className={styles.list}>
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
            <div className={styles.navSecond}>
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
                    <span>Подписаться </span>
                    <IconArrow name="iconArrow" className={styles.iconArrow} />
                  </Button>
                </form>
              </div>
            </div>
            <address className={styles.address}>
              <a className={styles.phone} href="tel:+79999999999">
                +7 999 999-99-99
              </a>
              <div className={styles.addressIconWrapper}>
                <Icon name="address" className={styles.addressIcon} /> г.
                Новосибирск, улица, дом, офис
              </div>
            </address>
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
            <Link className={styles.copyLinkSecond} to="">
              Пользовательское соглашение
            </Link>
          </div>
        </Container>
      </div>
      {isMenu && <MobileMenu />}
    </footer>
  );
};

export default Footer;
