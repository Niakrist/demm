import React from "react";
import { useFilterParams } from "../../hooks/useFilterParams";
import DropDown from "../../ui/DropDown/DropDown";
import PriceRange from "../../ui/PriceRange/PriceRange";

const Filter = () => {
  const {
    categoriesLists,
    colorsList,
    collectionsList,
    montageList,
    typesList,
  } = useFilterParams();

  return (
    <div>
      <DropDown items={categoriesLists} type="category" name="Категория" />
      <DropDown items={collectionsList} type="collection" name="Коллекция" />
      <DropDown items={colorsList} type="color" name="Цвет" />
      <DropDown items={montageList} type="montage" name="Монтаж" />
      <DropDown items={typesList} type="type" name="Тип" />
      <PriceRange />
    </div>
  );
};

export default Filter;
