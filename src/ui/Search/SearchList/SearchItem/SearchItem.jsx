import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchItem.module.css";

const SearchItem = ({ item }) => {
  return (
    <Link to={`/catalog/${item.id}`} className={styles.link}>
      <img
        className={styles.img}
        src={`http://localhost:3024/img/${item.img_src}`}
        alt={item.title}
      />
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price} руб./шт</p>
      </div>
    </Link>
  );
};

export default SearchItem;
