import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import styles from "./Cart.module.css";
const Cart = () => {
  const { inCart } = useSelector((state) => state.cart);

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
  console.log(formatter.format());

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <Container>
          <h1 className={styles.title}>Корзина</h1>

          <div className={styles.cart}>
            {!inCart.length ? (
              <h2 className={styles.titleSecondary}>В корзине нет товаров</h2>
            ) : (
              <ul className={styles.cartList}>
                {inCart.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <article className={styles.card}>
                      <img
                        className={styles.img}
                        src={`http://localhost:3024/img/${item.img_src}`}
                        alt=""
                      />
                      <div className={styles.info}>
                        <Link
                          to={`/catalog/${item.id}`}
                          className={styles.infoTitle}>
                          {item.title}
                        </Link>
                        <p className={styles.infoArticle}>Артикул: 471363-no</p>
                      </div>
                      <div className={styles.controls}>
                        <div className={styles.quantity}>
                          <button className={styles.btn}>-</button>
                          <input
                            className={styles.input}
                            type="text"
                            value={item.cart}
                          />
                          <button className={styles.btn}>+</button>
                        </div>
                        <p className={styles.price}>
                          {formatter.format(item.cart * item.price)}
                        </p>
                        <button className={styles.del}></button>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.cartTotal}>
              <div className={styles.cartTotalWrapper}>
                <ul className={styles.cartTotalList}>
                  <li className={styles.cartTotalItem}>
                    <span>Итого</span>
                    <span>52500р</span>
                  </li>
                  <li className={styles.cartTotalItem}>
                    <span>Товары, 2 шт.</span>
                    <span>52000р</span>
                  </li>
                  <li className={styles.cartTotalItem}>
                    <span>Скидка</span>
                    <span>0</span>
                  </li>
                  <li className={styles.cartTotalItem}>
                    <span>Доставка</span>
                    <span>500</span>
                  </li>
                  <li className={styles.cartTotalItem}>
                    <span>Дата</span>
                    <span>20 декабря - 23 декабря</span>
                  </li>
                  <li className={styles.cartTotalItem}>
                    <span>Оплата</span>
                    <span>Картой</span>
                  </li>
                </ul>
                <Button className={styles.btnSend}>Оформить заказ</Button>
                <div className={styles.privacyPolicy}>
                  <PrivacyPolicy className={styles.color} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.delivery}>
            <h2 className={styles.deliveryTitle}>Адрес доставки</h2>
            <form className={styles.form}>
              <Input type="text" placeholder="Город" />
              <Input type="text" placeholder="Улицы, дом" />
              <Input type="text" placeholder="Квартира" />
              <Input type="text" placeholder="ФИО" />
              <Input type="text" placeholder="Индекс" />
              <Button className={styles.btnSend}>Сохранить</Button>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
