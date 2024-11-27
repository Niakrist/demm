import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Container.module.css";

const Container = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
