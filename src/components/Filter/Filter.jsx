import React from "react";
import { useDispatch } from "react-redux";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useQueryParam } from "../../hooks/useQueryParam";
import { resetFilter } from "../../store/productsSlice/productsSlice";
import DropDown from "../../ui/DropDown/DropDown";
import PriceRange from "../../ui/PriceRange/PriceRange";
import { clsx } from "../../utils/clsx";
import styles from "./Filter.module.css";

const Filter = () => {
  const { searchParams } = useQueryParam();
  const dispatch = useDispatch();

  const {
    categoriesLists,
    colorsList,
    collectionsList,
    montageList,
    typesList,
  } = useFilterParams();

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <div className={styles.filter}>
      <DropDown items={categoriesLists} type="category" name="Категория" />
      <DropDown items={collectionsList} type="collection" name="Коллекция" />
      <DropDown items={colorsList} type="color" name="Цвет" />
      <DropDown items={montageList} type="montage" name="Монтаж" />
      <DropDown items={typesList} type="type" name="Тип" />
      <PriceRange />
      <button
        onClick={handleReset}
        className={clsx(
          styles.resetFilter,
          !!searchParams.size && styles.show
        )}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filter;
