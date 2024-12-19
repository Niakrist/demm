import React, { useEffect } from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const refModal = useRef(null);

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const handleClick = ({ target }) => {
    if (target === refModal.current) {
      closeModal();
    }
  };

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div ref={refModal} className={styles.wrapper}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставьте заявку на обратный звонок</h2>
        <p className={styles.text}>
          Заполните форму, наш специалист свяжется с вами в ближайшее время.
        </p>

        <form className={styles.form}>
          <Input className={styles.input} type="text" placeholder="Ваше имя" />
          <Input
            className={styles.input}
            type="tel"
            placeholder="Номер телефона"
          />

          <PrivacyPolicy className={styles.color} />
        </form>

        <Button type="submit" className={styles.btn}>
          Оставить заявку
        </Button>
        <button onClick={closeModal} className={styles.close}></button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
