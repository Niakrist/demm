import React, { useEffect } from "react";
import CatalogNavLink from "./CatalogNavLink/CatalogNavLink";
import styles from "./CatalogNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../store/categoriesSlice/categoriesSlice";

const CatalogNav = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log("categories: ", categories);

  const catalogsNav = [
    { id: 1, name: "Смесители", img: "./images/mixers.jpg" },
    { id: 2, name: "Душевые системы", img: "./images/shower-systems.jpg" },
    { id: 3, name: "Душевые стойки", img: "./images/shower-racks.jpg" },
    { id: 4, name: "Изливы", img: "./images/outpourings.jpg" },
    { id: 5, name: "Аксессуары", img: "./images/accessories.jpg" },
  ];

  return (
    <nav>
      <ul className={styles.list}>
        {catalogsNav.map((item) => (
          <li key={item.id} className={styles.item}>
            <CatalogNavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CatalogNav;
