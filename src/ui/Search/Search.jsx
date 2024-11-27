import React from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.from}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск по сайту..."
          name="search"
        />
        <Icon name="searchIcon" className={styles.searchIcon} />
      </label>
    </form>
  );
};

export default Search;
