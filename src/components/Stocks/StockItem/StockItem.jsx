import React from "react";
import { Link } from "react-router-dom";
import { createDatetimeForTag } from "../../../utils/createDatetimeForTag";
import Icon from "../../Icon/Icon";
import styles from "./StockItem.module.css";

const StockItem = ({ stock }) => {
  return (
    <article>
      <img className={styles.img} src={stock.img} alt={stock.title} />
      <p className={styles.date}>
        Акция действует до{" "}
        <time dateTime={createDatetimeForTag(stock.term)}>{stock.term}</time>
      </p>
      <h3>
        <Link to={"/"} className={styles.titleCard}>
          {stock.title}
        </Link>
      </h3>
      <p className={styles.text}>{stock.text}</p>
      <Link to="/" className={styles.detail}>
        Подробнее <Icon name="iconArrow" className={styles.iconArrow} />
      </Link>
    </article>
  );
};

export default StockItem;
