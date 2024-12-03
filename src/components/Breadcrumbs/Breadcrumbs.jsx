import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  return (
    <Container>
      <ul className={styles.breadcrumbs}>
        <li className={styles.item}>
          <Link className={styles.link}>Главная</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link}>Каталог</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Breadcrumbs;
