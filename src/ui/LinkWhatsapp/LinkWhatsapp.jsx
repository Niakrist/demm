import React from "react";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./LinkWhatsapp.module.css";

const LinkWhatsapp = ({ className }) => {
  return (
    <a
      className={clsx(styles.whatsappLink, className)}
      href="https://wa.me/+79999999999"
      target="_blank">
      <Icon name="whatsapp" className={styles.whatsapp} />{" "}
      <span>Написать в WhatsApp</span>
    </a>
  );
};

export default LinkWhatsapp;
