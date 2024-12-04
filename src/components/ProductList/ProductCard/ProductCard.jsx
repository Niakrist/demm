import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import Presence from "../../Presence/Presence";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  if (!product) return;

  return (
    <li className={styles.card}>
      <Link className={styles.link} to={product.id}>
        <img
          className={styles.img}
          src={`http://localhost:3024/${product.images.present}`}
          alt=""
        />
        <div className={styles.info}>
          <Presence product={product} />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.collection}>Коллекция: {product.categoryRus}</p>
        </div>
        <p className={styles.price}>{product.price} руб./шт</p>
        <Button className={styles.cart}>В корзину</Button>
        <Button className={styles.buy}>Купить в 1 клик</Button>
      </Link>
    </li>
  );
};

export default ProductCard;
