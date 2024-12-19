import { useState } from "react";
import Button from "../../ui/Button/Button";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./FormFeedback.module.css";

const FormFeedback = () => {
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
      <PrivacyPolicy className={styles.color} />

      <Button type="submit" className={styles.btn}>
        Оставить заявку
      </Button>
    </form>
  );
};

export default FormFeedback;
