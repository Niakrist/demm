import React from "react";
import { useCategories } from "../../hooks/useCategories";
import DropDown from "../../ui/DropDown/DropDown";

const Filter = () => {
  const category = useCategories();

  if (!category) return;

  return (
    <div>
      <DropDown items={category} name="Коллекции" />
      <DropDown items={category} name="Коллекции" />
    </div>
  );
};

export default Filter;
