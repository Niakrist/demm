import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useKeypress } from "../../hooks/useKeypress";
import {
  toggleModal,
  toggleModalByNow,
} from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./ModalByNow.module.css";
import { validatorConfig } from "../../constats/validatorConfig";
import { useValidate } from "../../hooks/useValidate";
import InputField from "../../ui/InputField/InputField";
import { clsx } from "../../utils/clsx";

const ModalByNow = () => {
  const { productByNow } = useSelector((state) => state.cart);

  const [person, setPerson] = useState({
    name: "",
    phone: "",
    email: "",
    check: false,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const errors = useValidate(person, validatorConfig);

  useEffect(() => {
    if (isFormSubmitted) {
      setValidationErrors(errors);
    }
  }, [isFormSubmitted, person, errors]);

  const isError = Object.keys(errors).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isError) {
      closeModal();
      console.log("person: ", person);
    }
  };

  const dispatch = useDispatch();
  const refModal = useRef(null);

  const closeModal = () => {
    dispatch(toggleModalByNow(false));
  };

  const handleClick = ({ target }) => {
    if (target === refModal.current) {
      closeModal();
    }
  };

  useKeypress("Escape", closeModal);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = ({ target }) => {
    setPerson((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleCheck = () => {
    setPerson((prev) => ({ ...prev, check: !prev.check }));
  };

  return ReactDOM.createPortal(
    <div ref={refModal} className={styles.wrapper}>
      <div className={styles.modalByNow}>
        <h3 className={styles.title}>Купить сейчас</h3>
        <div className={styles.product}>
          <img
            className={styles.img}
            src={`http://localhost:3024/img/${productByNow.img_src}`}
            alt=""
          />
          <p className={styles.name}>{productByNow.title}</p>
        </div>

        <form
          id="formModalByNow"
          className={styles.form}
          onSubmit={handleSubmit}>
          <InputField
            className={clsx(
              styles.input,
              validationErrors.name && styles.inputError
            )}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={person.name}
            onChange={handleChange}
            error={validationErrors.name}
          />
          <InputField
            className={clsx(
              styles.input,
              validationErrors.phone && styles.inputError
            )}
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={person.phone}
            onChange={handleChange}
            error={validationErrors.phone}
          />
          <InputField
            className={clsx(
              styles.input,
              validationErrors.email && styles.inputError
            )}
            type="email"
            name="email"
            placeholder="E-Mail"
            value={person.email}
            onChange={handleChange}
            error={validationErrors.email}
          />
          <PrivacyPolicy
            className={styles.color}
            privacyPolicy={person}
            onChange={handleCheck}
            errors={validationErrors}
            id="modalByNow"
          />
        </form>

        <Button form="formModalByNow" type="submit" className={styles.btn}>
          Оставить заявку
        </Button>
        <button onClick={closeModal} className={styles.close}></button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalByNow;
