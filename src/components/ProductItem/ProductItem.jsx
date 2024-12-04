import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductItem } from "../../store/productItemSlice/productItemSlice";
import { clsx } from "../../utils/clsx";
import Container from "../Container/Container";
import Presence from "../Presence/Presence";
import SliderGood from "../SliderGood/SliderGood";
import Characteristic from "./Characteristic/Characteristic";
import PriceBlock from "../PriceBlock/PriceBlock";
import styles from "./ProductItem.module.css";

const ProductItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productItem } = useSelector((state) => state.productItem);

  const colors = ["cr", "black", "cx"];

  useEffect(() => {
    dispatch(fetchProductItem(id));
  }, [dispatch, id]);

  if (!productItem) return;

  return (
    <section className={styles.productItem}>
      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.sliderGood}>
            <SliderGood />
          </div>

          <h1 className={styles.title}>{productItem.title}</h1>
          <div className={styles.presence}>
            <Presence product={productItem} />
          </div>
          <div className={styles.colorWrapper}>
            <p className={styles.color}>
              Цвет: <span>{productItem.color}</span>
            </p>
            <ul className={styles.colorList}>
              {colors.map((color) => (
                <li
                  key={color}
                  className={clsx(
                    styles[color],
                    color === "black" && styles.active
                  )}>
                  {color}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.characteristic}>
            <Characteristic data={productItem.characteristic} />
          </div>
          <div className={styles.priceBlock}>
            <PriceBlock product={productItem} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductItem;
