import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import Button from "../Button/Button";
import styles from "./Search.module.css";

const Search = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  return (
    <div className={styles.search}>
      <button className={styles.btnMobile}>
        <Icon name="searchIcon" className={styles.searchIcon} />
      </button>
      <form className={styles.from}>
        <label
          className={clsx(styles.label, isActiveInput && styles.labelActive)}>
          <input
            className={styles.input}
            type="text"
            placeholder="Поиск по сайту..."
            name="search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Icon name="searchIcon" className={styles.searchIcon} />
        </label>
      </form>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="" className={styles.link}>
            <img src="./images/search-img.png" alt="" />
            <div className={styles.content}>
              <p className={styles.title}>
                Demm Rory Смеситель для биде на 1 отв. с донным клапаном, цвет:
                бронза
              </p>
              <p className={styles.price}>45 220 руб./шт</p>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="" className={styles.link}>
            <img src="./images/search-img.png" alt="" />
            <div className={styles.content}>
              <p className={styles.title}>
                Demm Rory Смеситель для биде на 1 отв. с донным клапаном, цвет:
                бронза
              </p>
              <p className={styles.price}>45 220 руб./шт</p>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Button className={styles.btn}>
            Все результаты{" "}
            <Icon name="iconArrow" className={styles.iconArrow} />{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Search;
