import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./InputLine.module.css";

const InputLine = (props) => {
  const { type, name, placeholder, value, onChange, error } = props;
  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(styles.input, error && styles.inputError)}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputLine;
