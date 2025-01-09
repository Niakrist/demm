import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Cart.module.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import Delivery from "./Delivery/Delivery";
import { validatorConfig } from "../../constats/validatorConfig";
import { useValidate } from "../../hooks/useValidate";
import { toggleOrderModal } from "../../store/modalSlice/modalSlice";
import { addOrderData } from "../../store/orderDataSlice/orderDataSlice";

const initialCostumerInfo = {
  name: "",
  phone: "",
  email: "",
  city: "",
  street: "",
  flat: "",
  check: false,
};

const Cart = () => {
  const { inCart } = useSelector((state) => state.cart);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [costumerInfo, setCostumerInfo] = useState(initialCostumerInfo);

  const dispatch = useDispatch();

  const errors = useValidate(costumerInfo, validatorConfig);

  const handleChangeInput = ({ target }) => {
    setCostumerInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleChangeCheck = () => {
    setCostumerInfo((prev) => ({
      ...prev,
      check: !prev.check,
    }));
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setValidationErrors(errors);
    }
  }, [isFormSubmitted, costumerInfo, errors]);

  const isError = Object.keys(errors).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (!isError) {
      dispatch(toggleOrderModal(true));
      dispatch(addOrderData(costumerInfo));
    }
  };

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.section}>
          <Container>
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.cart}>
              {!inCart.length ? (
                <h2 className={styles.titleSecondary}>В корзине нет товаров</h2>
              ) : (
                <CartList inCart={inCart} />
              )}
              <CartTotal
                costumerInfo={costumerInfo}
                onChange={handleChangeCheck}
                inCart={inCart}
                errors={validationErrors}
              />
            </div>
            <Delivery
              inCart={inCart}
              costumerInfo={costumerInfo}
              onChange={handleChangeInput}
              handleSubmit={handleSubmit}
              errors={validationErrors}
            />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
