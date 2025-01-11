import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Slider.module.css";

import { useState } from "react";
import BubbleList from "../../ui/BubbleList/BubbleList";
import SlideItem from "./SlideItem/SlideItem";
import ProductCard from "../ProductList/ProductCard/ProductCard";

const Slider = ({ products, title, card }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("products: ", products);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const handleClickSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!products) return;

  return (
    <section className={styles.slider}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
      </Container>
      <div className={styles.sliderWrapper}>
        <button className={styles.btn} onClick={handlePrev}>
          <Icon name="iconArrow" className={styles.arrowLeft} />
        </button>
        {/* <Container> */}
        <div className={styles.sliderContainer}>
          <ul
            className={styles.sliderList}
            style={{ transform: `translateX(-${currentIndex * 330}px)` }}
          >
            {products.map((product) => {
              return (
                <li className={styles.item} key={`item-${product.id}`}>
                  {card ? (
                    <ProductCard product={product} />
                  ) : (
                    <SlideItem product={product} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* </Container> */}
        <button className={styles.btn} onClick={handleNextSlide}>
          <Icon name="iconArrow" className={styles.arrow} />
        </button>
      </div>
      <div className={styles.wrapperBubbleList}>
        <BubbleList
          list={products.slice(0, -3)}
          currentIndex={currentIndex}
          onClick={handleClickSlide}
        />
      </div>
    </section>
  );
};

export default Slider;
