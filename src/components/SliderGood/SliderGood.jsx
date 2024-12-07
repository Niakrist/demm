import React, { useState } from "react";
import styles from "./SliderGood.module.css";
import Slider from "../Slider/Slider";
import Icon from "../Icon/Icon";
import { clsx } from "../../utils/clsx";

const SliderGood = ({ product }) => {
  const [currentIndex, setCrrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCrrentIndex((prevSlide) =>
      prevSlide === product.images_slider.length - 1 ? 0 : prevSlide + 1
    );
  };
  const handlePrevSlide = () => {
    setCrrentIndex((prevSlide) =>
      prevSlide === 0 ? product.images_slider.length - 1 : prevSlide - 1
    );
  };

  const handleClickSlide = (index) => {
    setCrrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={`http://localhost:3024/img/${product.images_slider[currentIndex]}`}
          alt=""
        />
      </div>

      <div className={styles.navSlide}>
        <button onClick={handlePrevSlide} className={styles.btn}>
          <Icon name="iconArrow" className={styles.iconArrowLeft} />
        </button>
        <ul className={styles.listSlide}>
          {product.images_slider.map((item, index) => (
            <li
              onClick={() => handleClickSlide(index)}
              className={clsx(
                styles.listItem,
                index === currentIndex && styles.active
              )}
              key={item + index}
            >
              <img
                className={styles.itemImg}
                src={`http://localhost:3024/img/${item}`}
                alt=""
              />
            </li>
          ))}
        </ul>
        <button onClick={handleNextSlide} className={styles.btn}>
          <Icon name="iconArrow" className={styles.iconArrow} />
        </button>
      </div>
    </div>
  );
};

export default SliderGood;
