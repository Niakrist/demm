import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./FormFeedback.module.css";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../constats/validatorConfig";
import { useValidate } from "../../hooks/useValidate";

const FormFeedback = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({ check: false });

  const errors = useValidate(privacyPolicy, validatorConfig);

  const handleChange = () => {
    setPrivacyPolicy((prev) => ({ ...prev, check: !privacyPolicy.check }));
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
      <PrivacyPolicy
        className={styles.color}
        privacyPolicy={privacyPolicy}
        onChange={handleChange}
        errors={errors}
      />

      <Button type="submit" className={styles.btn}>
        Оставить заявку
      </Button>
    </form>
  );
};

export default FormFeedback;
