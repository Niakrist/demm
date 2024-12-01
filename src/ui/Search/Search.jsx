import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
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

  if (isMobile) {
    return (
      <button className={styles.btnMobile}>
        <Icon name="searchIcon" className={styles.searchIcon} />
      </button>
    );
  }
  if (!isMobile) {
    return (
      <form className={styles.from}>
        <label
          className={clsx(styles.label, isActiveInput && styles.labelActive)}
        >
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
    );
  }
};

export default Search;
