import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Promo.module.css";

const promos = [
  { id: "1", img: "/images/promo1.jpg" },
  { id: "2", img: "/images/promo2.jpg" },
  { id: "3", img: "/images/promo3.jpg" },
  { id: "4", img: "/images/promo4.jpg" },
  { id: "5", img: "/images/promo5.jpg" },
];

const Promo = () => {
  const [slide, setSlide] = useState(promos[0]);
  const timerIdRef = useRef(null);

  const handleChangeSlide = (id) => {
    const elem = promos.find((promo) => promo.id === id);
    if (elem) {
      clearInterval(timerIdRef.current);
      setSlide(elem);
    }
  };

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      const currentIndex = promos.findIndex((promo) => promo.id === slide.id);

      if (currentIndex === promos.length - 1) {
        setSlide(promos[0]);
      } else {
        setSlide(promos[currentIndex + 1]);
      }
    }, 5000);

    return () => clearInterval(timerIdRef.current);
  }, [slide]);

  return (
    <section
      className={styles.promo}
      style={{ backgroundImage: `url(${slide.img})` }}>
      <Container className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Link className={styles.link} to="/">
              Перейти в каталог{" "}
              <Icon name="iconArrow" className={styles.iconArrow} />
            </Link>
            <h2 className={styles.title}>
              Изысканные смесители для вашего интерьера
            </h2>
            <p className={styles.text}>
              Гарантируем высочайшую безопасность и надёжность в соответствии
              с международными стандартами качества.
            </p>
          </div>
          <ul className={styles.list}>
            {promos.map((promo) => (
              <li key={promo.id}>
                <span
                  className={
                    promo.id === slide.id ? styles.roundActive : styles.round
                  }
                  onClick={() => handleChangeSlide(promo.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Promo;
