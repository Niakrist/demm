import React from "react";
import ProductItem from "./ProductItem/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  if (!products) return;

  return (
    <section>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
