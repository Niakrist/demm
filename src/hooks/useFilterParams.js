import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColors } from "../store/colorsSLice/colorsSlice";
import { fetchCollections } from "../store/collectionsSlice/collectionsSlice";
import { fetchMontage } from "../store/montageSlice/montageSlice";
import { fetchTypes } from "../store/typesSlice/typesSlice";
import { transformObjectInArr } from "../utils/transformObjectInArr";
import { fetchCategories } from "../store/categoriesSlice/categoriesSlice";

export const useFilterParams = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);
  const { colors } = useSelector((state) => state.colors);
  const { collections } = useSelector((state) => state.collections);
  const { montage } = useSelector((state) => state.montage);
  const { types } = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(fetchColors());
    dispatch(fetchCollections());
    dispatch(fetchMontage());
    dispatch(fetchTypes());
  }, [dispatch]);

  if (!categories) return;

  const colorsList = transformObjectInArr(colors);
  const collectionsList = transformObjectInArr(collections);
  const montageList = transformObjectInArr(montage);
  const typesList = transformObjectInArr(types);

  return {
    colorsList,
    collectionsList,
    montageList,
    typesList,
  };
};
