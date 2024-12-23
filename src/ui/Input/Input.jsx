import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Input.module.css";

const Input = ({ placeholder, type, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input
        {...props}
        className={clsx(styles.input, error && styles.errroBorder)}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
