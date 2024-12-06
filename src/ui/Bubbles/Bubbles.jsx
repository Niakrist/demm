import React from "react";
import styles from "./Bubbles.module.css";

const Bubbles = ({ onClick, promo, slide }) => {
  return (
    <span
      className={promo.id === slide.id ? styles.roundActive : styles.round}
      onClick={() => onClick(promo.id)}
    />
  );
};

export default Bubbles;
