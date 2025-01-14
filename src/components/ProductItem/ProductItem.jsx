import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductItem } from "../../store/productItemSlice/productItemSlice";
import { clsx } from "../../utils/clsx";
import Container from "../Container/Container";
import Presence from "../Presence/Presence";
import SliderGood from "../SliderGood/SliderGood";
import Characteristic from "./Characteristic/Characteristic";
import styles from "./ProductItem.module.css";
import Price from "../Price/Price";
import Description from "./Description/Description";
import Slider from "../Slider/Slider";
import { transformObjectInArr } from "../../utils/transformObjectInArr";
import { fetchProducts } from "../../store/productsSlice/productsSlice";

const ProductItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productItem } = useSelector((state) => state.productItem);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductItem(id));
    dispatch(fetchProducts());
  }, [dispatch, id]);

  if (!productItem) return;

  const createLinkColor = (id, colorId) => {
    const index = id.indexOf("-");
    return id.slice(0, index + 1) + colorId;
  };

  const colors = transformObjectInArr(productItem.colorsArr);
  const characteristic = transformObjectInArr(productItem.characteristic);

  return (
    <section className={styles.productItem}>
      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.sliderGood}>
            <SliderGood product={productItem} />
          </div>
          <h1 className={styles.title}>{productItem.title}</h1>
          <div className={styles.presence}>
            <Presence product={productItem} />
          </div>
          <div className={styles.colorWrapper}>
            <p className={styles.color}>
              Цвет: <span>{Object.values(productItem.color)[0]}</span>
            </p>
            <ul className={styles.colorList}>
              {colors.map((color) => (
                <li
                  className={clsx(
                    styles[color],
                    color.id === Object.keys(productItem.color)[0] &&
                      styles.active
                  )}
                  key={color.id}
                >
                  <Link to={`/catalog/${createLinkColor(id, color.id)}`}>
                    <img
                      className={styles.colorImg}
                      src={`http://localhost:3024/img/${color.id}.webp`}
                      alt={color.name}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.characteristic}>
            <Characteristic data={characteristic} />
          </div>
          <div className={styles.price}>
            <Price className={styles.priceWrapper} product={productItem} />
            <div className={styles.priceInfo}>
              Цена действительна только для интернет-магазина и может отличаться
              от цен в розничных магазинах.
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <Description productItem={productItem} />
        </div>
      </Container>

      {isLoading && (
        <Slider products={products} title={"Коллекция ACIARIUM INOX"} />
      )}
      {isLoading && (
        <Slider products={products} title={"Подберите дополнительно"} card />
      )}
    </section>
  );
};

export default ProductItem;
