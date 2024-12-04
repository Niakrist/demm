import React from "react";
import Pagination from "../Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  if (!products) return;

  return (
    <section className={styles.productList}>
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          // <li className={styles.item} key={product.id}>

          // </li>
        ))}
      </ul>
      <Pagination />
    </section>
  );
};

export default ProductList;
