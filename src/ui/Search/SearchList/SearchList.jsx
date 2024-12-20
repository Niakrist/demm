import React from "react";
import { useSelector } from "react-redux";
import Icon from "../../../components/Icon/Icon";
import Button from "../../Button/Button";
import SearchItem from "./SearchItem/SearchItem";
import styles from "./SearchList.module.css";

const SearchList = () => {
  const { searchList } = useSelector((state) => state.search);

  if (!searchList) return;

  return (
    <>
      {!searchList.length ? (
        <p>По запросу ничего не найдено</p>
      ) : (
        <ul className={styles.list}>
          {searchList.map((item) => (
            <li key={item.id} className={styles.item}>
              <SearchItem item={item} />
            </li>
          ))}
        </ul>
      )}
      <Button className={styles.btn}>
        Все результаты <Icon name="iconArrow" className={styles.iconArrow} />
      </Button>
    </>
  );
};

export default SearchList;
