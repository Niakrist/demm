import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Slider.module.css";

const Slider = () => {
  const { products } = useSelector((state) => state.products);

  if (!products) return;

  return (
    <div className={styles.slider}>
      <button> 1 </button>
      <Container>
        <ul className={styles.sliderWrapper}>
          {products.map((product) => (
            <li className={styles.item} key={product.id}>
              <img
                className={styles.img}
                src={`http://localhost:3024/img/${product.img_src}`}
                alt=""
              />
              <div className={styles.content}>
                <h4 className={styles.title}>{product.title}</h4>
                <Link className={styles.link}>
                  Смотреть <Icon className={styles.icon} name="iconArrow" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <button> 2 </button>
    </div>
  );
};

export default Slider;
