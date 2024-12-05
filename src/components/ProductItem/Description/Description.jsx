import React from "react";
import Icon from "../../Icon/Icon";

import styles from "./Description.module.css";

const Description = ({ productItem }) => {
  return (
    <>
      <h2 className={styles.title}>Описание</h2>
      <div className={styles.description}>
        <div className={styles.descriptionWrapper}>
          {productItem.description.map((item, index) => (
            <p className={styles.text} key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.collection}>
          <h3 className={styles.collectionTitle}>Комплектация</h3>
          <ul>
            <li className={styles.item}>
              <Icon name="presenceYes" className={styles.presenceYes} />{" "}
              <span>Смеситель</span>
            </li>
            <li className={styles.item}>
              <Icon name="presenceYes" className={styles.presenceYes} />{" "}
              <span>Монтажная часть</span>
            </li>
            <li className={styles.item}>
              <Icon name="presenceYes" className={styles.presenceYes} />{" "}
              <span>Инструкция</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Description;
