import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  const { type, name, placeholder, value, onChange, error, className } = props;

  return (
    <div className={styles.wrapper}>
      <input
        className={className}
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
export default InputField;
