import React from "react";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = ({ className, privacyPolicy, onChange, errors }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        name="check"
        type="checkbox"
        id="checkboxPrivacyPolicy"
        checked={privacyPolicy.check}
        onChange={onChange}
      />
      <label
        className={clsx(styles.checkboxCastom, className)}
        htmlFor="checkboxPrivacyPolicy">
        <Icon
          name="checkboxIcon"
          className={clsx(
            styles.checkboxIcon,
            className,
            privacyPolicy.check && styles.checkboxIconActive
          )}
        />
        <span>Я согласен(а) с Политикой конфиденциальности.</span>
      </label>
      {errors && <p className={styles.error}>{errors.check}</p>}
    </div>
  );
};

export default PrivacyPolicy;
