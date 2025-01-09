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
import Modal from "../Modal/Modal";
import OrderModal from "../OrderModal/OrderModal";
import ModalByNow from "../ModalByNow/ModalByNow";
import { transformObjectInArr } from "../../utils/transformObjectInArr";

const Footer = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const { isShowModal, isOrderModal, isModalByNow } = useSelector(
    (state) => state.isModal
  );

  const { categories } = useSelector((state) => state.categories);

  const categoriesList = transformObjectInArr(categories);

  const handleFocus = () => {
    setIsActiveInput(true);
  };
  const handleBlur = () => {
    setIsActiveInput(false);
  };

  const { isMenu } = useSelector((state) => state.menu);

  console.log("isMenu: ", isMenu);

  if (!categories) return;

  return (
    <footer>
      <div className={styles.footer}>
        <Container className={styles.up}>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img className={styles.logoImg} src={logoSrc} alt="Logo" />
            </div>
            <LinkWhatsapp className={styles.linkWhatsapp} />

            <div className={styles.navFirst}>
              <h3 className={styles.title}>Каталог</h3>
              <ul className={styles.list}>
                <li className={styles.itemNav}>
                  <Link
                    className={styles.linkNav}
                    to={`/catalog/?category=${categoriesList[0].id}`}
                  >
                    Смесители
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link
                    className={styles.linkNav}
                    to={`/catalog/?category=${categoriesList[1].id}`}
                  >
                    Душевые системы
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link
                    className={styles.linkNav}
                    to={`/catalog/?category=${categoriesList[2].id}`}
                  >
                    Душевые стойки
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link
                    className={styles.linkNav}
                    to={`/catalog/?category=${categoriesList[3].id}`}
                  >
                    Изливы
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link
                    className={styles.linkNav}
                    to={`/catalog/?category=${categoriesList[4].id}`}
                  >
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
                  <Link className={styles.linkNav} to="/about">
                    О компании
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/delivery-and-payment">
                    Оплата и доставка
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/shop">
                    Магазины
                  </Link>
                </li>
                <li className={styles.itemNav}>
                  <Link className={styles.linkNav} to="/contacts">
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
                  )}
                >
                  <label className={styles.label}>
                    <input
                      className={styles.input}
                      placeholder="Электронная почта"
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
      {isShowModal && <Modal />}
      {isModalByNow && <ModalByNow />}
      {isOrderModal && <OrderModal />}
    </footer>
  );
};

export default Footer;
