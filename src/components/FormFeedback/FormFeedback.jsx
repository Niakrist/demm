import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./FormFeedback.module.css";

const FormFeedback = () => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  };
  return (
    <form>
      <div className={styles.inputsGroup}>
        <input
          className={styles.input}
          placeholder="Ваше имя"
          type="text"
          name="name"
          required
        />
        <input
          className={styles.input}
          placeholder="Номер телефона"
          name="phone"
          type="tel"
          required
        />
      </div>
      <input className={styles.checkbox} type="checkbox" id="checkbox" />
      <label
        onClick={toggleCheck}
        className={styles.checkboxCastom}
        htmlFor="checkbox">
        <Icon
          name="checkboxIcon"
          className={clsx(
            styles.checkboxIcon,
            isCheck && styles.checkboxIconActive
          )}
        />
        <span>Я согласен(а) с Политикой конфиденциальности.</span>
      </label>
      <Button type="submit" className={styles.btn}>
        Оставить заявку
      </Button>
    </form>
  );
};

export default FormFeedback;
