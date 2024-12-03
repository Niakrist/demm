import React from "react";
import { Link } from "react-router-dom";
import styles from "./CatalogNavLink.module.css";

const CatalogNavLink = ({ item }) => {
  if (!item) return;

  return (
    <article className={styles.card}>
      <Link>
        <img className={styles.img} src={item.img} alt={item.name} />
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.goods}>Товаров: </p>
      </Link>
    </article>
  );
};

export default CatalogNavLink;
