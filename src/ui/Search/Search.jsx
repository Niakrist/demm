import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./Search.module.css";
import SearchList from "./SearchList/SearchList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changeSearchText,
  cleanSearchText,
  fetchSearch,
} from "../../store/searchSlice/searchSlice";

const Search = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const { searchText } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(searchText));
  }, [dispatch, searchText]);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  const handleChange = (e) => {
    dispatch(changeSearchText(e.target.value));
  };

  const handleClean = () => {
    dispatch(cleanSearchText());
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
            value={searchText}
            onChange={handleChange}
          />
          {searchText ? (
            <button onClick={handleClean} className={styles.cleanBtn}></button>
          ) : (
            <Icon name="searchIcon" className={styles.searchIcon} />
          )}
        </label>
      </form>
      {searchText && (
        <div className={styles.wrapper}>
          <SearchList />
        </div>
      )}
    </div>
  );
};

export default Search;
