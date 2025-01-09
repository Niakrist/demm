import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useQueryParam } from "../../hooks/useQueryParam";
import { fetchCollections } from "../../store/collectionsSlice/collectionsSlice";
import { fetchColors } from "../../store/colorsSLice/colorsSlice";
import {
  toggleCollectionParams,
  toggleColorParams,
  toggleMontageParams,
  toggleTypeParams,
} from "../../store/filterSlice/filterSlice";
import { fetchMontage } from "../../store/montageSlice/montageSlice";
import { resetFilter } from "../../store/productsSlice/productsSlice";
import { fetchTypes } from "../../store/typesSlice/typesSlice";
import DropDown from "../../ui/DropDown/DropDown";
import PriceRange from "../../ui/PriceRange/PriceRange";
import { clsx } from "../../utils/clsx";
import { transformObjectInArr } from "../../utils/transformObjectInArr";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { collections } = useSelector((state) => state.collections);
  const { colors } = useSelector((state) => state.colors);
  const { montage } = useSelector((state) => state.montage);
  const { types } = useSelector((state) => state.types);

  const { collectionParams, colorParams, montageParams, typeParams } =
    useSelector((state) => state.filter);

  // const [colorParams, setColorParams] = useState([]);

  console.log("montageParams: ", montageParams);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchColors());
    dispatch(fetchMontage());
    dispatch(fetchTypes());
  }, [dispatch]);

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);

    if (collectionParams.length > 0) {
      currentParams.set("collection", collectionParams.join(","));
    } else {
      currentParams.delete("collection");
    }
    if (colorParams.length > 0) {
      currentParams.set("color", colorParams.join(","));
    } else {
      currentParams.delete("color");
    }
    if (montageParams.length > 0) {
      console.log("++++");
      currentParams.set("montage", montageParams.join(","));
    } else {
      console.log("----");
      currentParams.delete("montage");
    }
    if (typeParams.length > 0) {
      currentParams.set("type", typeParams, join(","));
    } else {
      currentParams.delete("type");
    }
    navigate({ search: currentParams.toString() });
  }, [
    collectionParams,
    colorParams,
    montageParams,
    typeParams,
    navigate,
    searchParams,
  ]);

  const handleToggleCollectionParams = (item) => {
    dispatch(toggleCollectionParams(item));
  };

  const handleToggleColorParams = (item) => {
    dispatch(toggleColorParams(item));
  };
  const handleToggleMontageParams = (item) => {
    dispatch(toggleMontageParams(item));
  };
  const handleToggleTypeParams = (item) => {
    dispatch(toggleTypeParams(item));
  };

  if (!collections) return;

  const collectionsList = transformObjectInArr(collections);
  const colorsList = transformObjectInArr(colors);
  const montageList = transformObjectInArr(montage);
  const typesList = transformObjectInArr(types);

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <div className={styles.filter}>
      {/* <DropDown items={categoriesLists} type="category" name="Категория" /> */}
      <DropDown
        items={collectionsList}
        params={collectionParams}
        onToggleParams={handleToggleCollectionParams}
        type="collection"
        name="Коллекция"
      />
      <DropDown
        items={colorsList}
        params={colorParams}
        onToggleParams={handleToggleColorParams}
        type="color"
        name="Цвет"
      />
      <DropDown
        items={montageList}
        params={montageParams}
        onToggleParams={handleToggleMontageParams}
        type="montage"
        name="Монтаж"
      />
      <DropDown
        items={typesList}
        params={typeParams}
        onToggleParams={handleToggleTypeParams}
        type="type"
        name="Тип"
      />
      {/*<PriceRange /> */}
      <button
        onClick={handleReset}
        className={clsx(
          styles.resetFilter
          // !!searchParams.size && styles.show
        )}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filter;
