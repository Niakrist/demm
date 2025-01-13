import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFilterParams } from "../../hooks/useFilterParams";
import { fetchCollections } from "../../store/collectionsSlice/collectionsSlice";
import { fetchColors } from "../../store/colorsSLice/colorsSlice";
import {
  toggleCollectionParams,
  toggleColorParams,
  toggleMontageParams,
  toggleTypeParams,
  resetFilter,
  changeMinPrice,
  changeMaxPrice,
} from "../../store/filterSlice/filterSlice";
import { toggleFilterModal } from "../../store/modalSlice/modalSlice";
import { fetchMontage } from "../../store/montageSlice/montageSlice";
import { fetchPrice } from "../../store/priceSlice/priceSlice";
import { fetchTypes } from "../../store/typesSlice/typesSlice";
import DropDown from "../../ui/DropDown/DropDown";
import PriceRange from "../../ui/PriceRange/PriceRange";
import ResetFilter from "../../ui/ResetFilter/ResetFilter";
import { clsx } from "../../utils/clsx";
import { transformObjectInArr } from "../../utils/transformObjectInArr";
import styles from "./Filter.module.css";

const Filter = ({ mobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isFirstRender, setIsFirstRender] = useState(true);

  const { collections } = useSelector((state) => state.collections);
  const { colors } = useSelector((state) => state.colors);
  const { montage } = useSelector((state) => state.montage);
  const { types } = useSelector((state) => state.types);
  const { prices } = useSelector((state) => state.prices);

  const { collectionParams, colorParams, montageParams, typeParams, min, max } =
    useSelector((state) => state.filter);

  const pricesArr = prices.map((item) => parseInt(item)).sort((a, b) => a - b);
  const minPrice = pricesArr[0];
  const maxPrice = pricesArr.at(-1);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchColors());
    dispatch(fetchMontage());
    dispatch(fetchTypes());
    dispatch(fetchPrice());
  }, [dispatch]);

  //потом удалить, если не поможет
  // const currentParams = new URLSearchParams(searchParams);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const currentParams = new URLSearchParams(searchParams);

    const encodeValues = (params) => {
      return params.map((param) => encodeURIComponent(String(param))).join(",");
    };

    if (collectionParams.length > 0) {
      currentParams.set("collection", encodeValues(collectionParams));
    } else {
      currentParams.delete("collection");
    }
    if (colorParams.length > 0) {
      currentParams.set("color", encodeValues(colorParams));
    } else {
      currentParams.delete("color");
    }
    if (montageParams.length > 0) {
      currentParams.set("montage", encodeValues(montageParams));
    } else {
      currentParams.delete("montage");
    }
    if (typeParams.length > 0) {
      currentParams.set("type", encodeValues(typeParams));
    } else {
      currentParams.delete("type");
    }
    if (min === minPrice) {
      currentParams.delete("minprice");
    }
    if (max === maxPrice) {
      currentParams.delete("maxprice");
    }

    const urlWithoutSpace = currentParams.toString().replace("%2520", "%20");
    navigate({ search: urlWithoutSpace });
  }, [
    collectionParams,
    colorParams,
    montageParams,
    typeParams,
    navigate,
    searchParams,
    minPrice,
    maxPrice,
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

  const handleClose = () => {
    dispatch(toggleFilterModal(false));
  };

  if (!collections) return;

  const collectionsList = transformObjectInArr(collections);
  const colorsList = transformObjectInArr(colors);
  const montageList = transformObjectInArr(montage);
  const typesList = transformObjectInArr(types);

  // const handleReset = () => {
  //   const currentParams = new URLSearchParams(searchParams);
  //   dispatch(resetFilter());
  //   dispatch(changeMinPrice(minPrice));
  //   dispatch(changeMaxPrice(maxPrice));
  //   navigate({ search: currentParams.toString() });
  // };

  return (
    <div className={clsx(styles.filter)}>
      {/* <DropDown items={categoriesLists} type="category" name="Категория" /> */}
      <DropDown
        className={styles.dropDown}
        items={collectionsList}
        params={collectionParams}
        onToggleParams={handleToggleCollectionParams}
        type="collection"
        name="Коллекция"
      />
      <DropDown
        className={styles.dropDown}
        items={colorsList}
        params={colorParams}
        onToggleParams={handleToggleColorParams}
        type="color"
        name="Цвет"
      />
      <DropDown
        className={styles.dropDown}
        items={montageList}
        params={montageParams}
        onToggleParams={handleToggleMontageParams}
        type="montage"
        name="Монтаж"
      />
      <DropDown
        className={styles.dropDown}
        items={typesList}
        params={typeParams}
        onToggleParams={handleToggleTypeParams}
        type="type"
        name="Тип"
      />
      <PriceRange />
      <div className={styles.buttonWrapper}>
        <ResetFilter />
        {mobile && (
          <button
            onClick={handleClose}
            className={clsx(
              styles.buttonApply,
              !!searchParams.size && styles.show
            )}>
            Применить
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
