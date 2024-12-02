import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./PhoneGroup.module.css";

const PhoneGroup = ({ className }) => {
  return (
    <div className={clsx(className, styles.phone)}>
      <a className={styles.tel} href="tel:799999999">
        +7 999 999-99-99
      </a>
      <p className={styles.time}>
        <span className={styles.open} />
        Звоните с 8:10 до 18:10
      </p>
    </div>
  );
};

export default PhoneGroup;
