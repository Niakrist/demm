import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = ({ className, error }) => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkboxPrivacyPolicy"
      />
      <label
        onClick={toggleCheck}
        className={clsx(styles.checkboxCastom, className)}
        htmlFor="checkboxPrivacyPolicy">
        <Icon
          name="checkboxIcon"
          className={clsx(
            styles.checkboxIcon,
            className,
            isCheck && styles.checkboxIconActive
          )}
        />
        <span>Я согласен(а) с Политикой конфиденциальности.</span>
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default PrivacyPolicy;
