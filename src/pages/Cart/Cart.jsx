import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import {
  decrementInCart,
  incrementInCart,
  inputInCart,
  removeFromCart,
} from "../../store/cartSlice/cartSlice";
import { toggleOrderModal } from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { validator } from "../../utils/validator";
import styles from "./Cart.module.css";
const Cart = () => {
  const { inCart } = useSelector((state) => state.cart);

  const [errors, setErros] = useState({});

  const [costumerInfo, setCostumerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    street: "",
    flat: "",
  });

  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat("ru-RU");

  const handleIncrement = (item) => {
    dispatch(incrementInCart(item));
  };

  const handleDecrement = (item) => {
    if (item.cart > 1) {
      dispatch(decrementInCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleChangeQuantity = (e, product) => {
    let num = e.target.value;
    const regEx = /^(?!0)\d+$/;
    if (regEx.test(num)) {
      dispatch(inputInCart({ product, value: num }));
    }
  };

  const getTotalPrice = (inCart) => {
    const products = inCart.reduce(
      (acc, item) => (acc += Number(item.cart)),
      0
    );
    const totalPrice = inCart.reduce(
      (acc, item) => (acc += item.price * item.cart),
      0
    );
    let priceDelivery = 0;
    if (totalPrice > 100000) {
      priceDelivery = 0;
    } else if (totalPrice > 50000) {
      priceDelivery = 1500;
    } else {
      priceDelivery = 5000;
    }
    return [products, totalPrice, priceDelivery];
  };

  const [products, totalPrice, priceDelivery] = getTotalPrice(inCart);

  const handleChangeInput = ({ target }) => {
    setCostumerInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit: ", { ...costumerInfo, totalPrice: totalPrice });
  };

  const validatorConfig = {
    name: {
      isRus: { message: "Имя должно состоять из русских букв" },
      isLength: { message: "В имени должно быть больше одной буквы" },
      isRequired: { message: "Поле имя обязательное" },
    },
    email: {
      isRequired: { message: "Поле email обязательное" },
      isEmail: { message: "Почта не верная" },
    },
    phone: {
      isNumber: { message: "Телефон введен не корректно" },
      isLengthPhone: { message: "В телефон номер должно быть 11 чисел" },
    },
    city: {
      isRus: { message: "Город должно состоять из русских букв" },
      isLength: { message: "В городе должно быть больше одной буквы" },
      isRequired: { message: "Поле город обязательное" },
    },
    street: {
      isRequired: { message: "Поле Улица, дом обязательное" },
    },
    flat: {
      isRequired: { message: "Поле квартира обязательное" },
      isNumber: { message: "Номер квартиры введен не корректно" },
    },
  };

  const validate = () => {
    const errors = validator(costumerInfo, validatorConfig);
    setErros(errors);
  };
  useEffect(() => {
    validate();
  }, [costumerInfo]);

  console.log("errors: ", errors);

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
                        <p className={styles.infoArticle}>Артикул: {item.id}</p>
                      </div>
                      <div className={styles.controls}>
                        <div className={styles.quantity}>
                          <button
                            onClick={() => handleDecrement(item)}
                            className={styles.btn}>
                            -
                          </button>
                          <input
                            className={styles.input}
                            type="text"
                            onChange={(e) => handleChangeQuantity(e, item)}
                            value={formatter.format(item.cart)}
                          />
                          <button
                            onClick={() => handleIncrement(item)}
                            className={styles.btn}>
                            +
                          </button>
                        </div>
                        <p className={styles.price}>
                          {formatter.format(item.cart * item.price)} р.
                        </p>
                        <button
                          onClick={() => handleRemove(item)}
                          className={styles.del}></button>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
            <div className={styles.cartTotal}>
              {!!inCart.length && (
                <div className={styles.cartTotalWrapper}>
                  <ul className={styles.cartTotalList}>
                    <li className={styles.cartTotalItem}>
                      <span>Итого</span>
                      <span>{`${formatter.format(
                        priceDelivery + totalPrice
                      )} руб.`}</span>
                    </li>
                    <li className={styles.cartTotalItem}>
                      <span>
                        Товары, <strong>{formatter.format(products)}</strong>{" "}
                        шт.
                      </span>
                      <span>{`${formatter.format(totalPrice)} руб.`}</span>
                    </li>
                    <li className={styles.cartTotalItem}>
                      <span>Скидка</span>
                      <span>0</span>
                    </li>
                    <li className={styles.cartTotalItem}>
                      <span>Доставка</span>
                      <span>
                        {!!priceDelivery
                          ? `${formatter.format(priceDelivery)} руб.`
                          : "Бесплатно"}
                      </span>
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
                  <Button form="cartFrom" className={styles.btnSend}>
                    Оформить заказ
                  </Button>
                  <div className={styles.privacyPolicy}>
                    <PrivacyPolicy className={styles.color} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.delivery}>
            {!!inCart.length && (
              <>
                <h2 className={styles.deliveryTitle}>Адрес доставки</h2>
                <form
                  id="cartFrom"
                  onSubmit={handleSubmit}
                  className={styles.form}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="ФИО"
                    value={costumerInfo.name}
                    onChange={handleChangeInput}
                    error={errors.name}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="79998887766"
                    value={costumerInfo.phone}
                    onChange={handleChangeInput}
                    error={errors.phone}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={costumerInfo.email}
                    onChange={handleChangeInput}
                    error={errors.email}
                  />
                  <Input
                    type="text"
                    name="city"
                    placeholder="Город"
                    value={costumerInfo.city}
                    onChange={handleChangeInput}
                    error={errors.city}
                  />
                  <Input
                    type="text"
                    name="street"
                    placeholder="Улица, дом"
                    value={costumerInfo.street}
                    onChange={handleChangeInput}
                    error={errors.street}
                  />
                  <Input
                    type="number"
                    name="flat"
                    placeholder="Квартира"
                    value={costumerInfo.flat}
                    onChange={handleChangeInput}
                    error={errors.flat}
                  />
                </form>
              </>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
