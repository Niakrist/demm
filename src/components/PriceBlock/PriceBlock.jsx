import React from "react";
import Button from "../../ui/Button/Button";
import Price from "../Price/Price";

import styles from "./PriceBlock.module.css";

const PriceBlock = ({ product }) => {
  return (
    <div className={styles.priceWrapper}>
      <Price product={product} />
      <p>
        Цена действительна только для интернет-магазина и может отличаться
        от цен в розничных магазинах.
      </p>
    </div>
  );
};

export default PriceBlock;
