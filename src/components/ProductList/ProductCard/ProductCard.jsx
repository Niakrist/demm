import { Link } from "react-router-dom";
import Presence from "../../Presence/Presence";
import Price from "../../Price/Price";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  if (!product) return;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to={`/catalog/${product.id}`} className={styles.link}>
        <img
          className={styles.img}
          src={`http://localhost:3024/img/${product.img_src}`}
          alt=""
        />
        <div className={styles.info}>
          <Presence product={product} />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.collection}>Коллекция: {product.categoryRus}</p>
        </div>
        <div onClick={handleClick} className={styles.price}>
          <Price product={product} productCard />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
