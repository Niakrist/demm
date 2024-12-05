import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Button.module.css";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className)}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
