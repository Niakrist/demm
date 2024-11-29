import React from "react";
import styles from "./LinkIcon.module.css";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";

const LinkIcon = ({ to, name, inCart }) => {
  return (
    <Link className={styles.link} to={to}>
      <Icon name={name} className={styles.icon} />
      {inCart && <span className={styles.inCart}>{inCart}</span>}
    </Link>
  );
};

export default LinkIcon;
