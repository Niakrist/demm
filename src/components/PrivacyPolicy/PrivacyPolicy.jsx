import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = ({ className }) => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  };
  return (
    <>
      <input className={styles.checkbox} type="checkbox" id="checkbox1" />
      <label
        onClick={toggleCheck}
        className={clsx(styles.checkboxCastom, className)}
        htmlFor="checkbox1">
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
    </>
  );
};

export default PrivacyPolicy;
