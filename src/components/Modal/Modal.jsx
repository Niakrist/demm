import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useKeypress } from "../../hooks/useKeypress";
import { toggleModal } from "../../store/modalSlice/modalSlice";
import Button from "../../ui/Button/Button";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./Modal.module.css";
import { validatorConfig } from "../../constats/validatorConfig";
import { useValidate } from "../../hooks/useValidate";
import InputField from "../../ui/InputField/InputField";
import { clsx } from "../../utils/clsx";

const Modal = () => {
  const [person, setPerson] = useState({ name: "", phone: "", check: false });
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
    dispatch(toggleModal(false));
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
    <div ref={refModal} className={styles.wrapperModal}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставьте заявку на обратный звонок</h2>
        <p className={styles.text}>
          Заполните форму, наш специалист свяжется с вами в ближайшее время.
        </p>

        <form id="formModal" className={styles.form} onSubmit={handleSubmit}>
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
          <PrivacyPolicy
            className={styles.color}
            privacyPolicy={person}
            onChange={handleCheck}
            errors={validationErrors}
            id="modal"
          />
        </form>

        <Button form="formModal" type="submit" className={styles.btn}>
          Оставить заявку
        </Button>
        <button onClick={closeModal} className={styles.close}></button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
