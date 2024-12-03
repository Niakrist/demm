import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.img}
        src={`http://localhost:3024/${product.images.present}`}
        alt=""
      />
      <div className={styles.info}>
        <p className={styles.presence}>
          <span>Нет в наличии</span>
          <span>{product.id}</span>
        </p>
        <h3>
          <Link className={styles.title}>{product.title}</Link>
        </h3>
        <p className={styles.collection}>Коллекция: {product.categoryRus}</p>
      </div>
      <p className={styles.price}>{product.price} руб./шт</p>
      <Button>В корзину</Button>
      <Button>Купить в 1 клик</Button>
    </article>
  );
};

export default ProductItem;
