import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Promo.module.css";
import BubbleList from "../../ui/BubbleList/BubbleList";

const promos = [
  { id: "1", img: "/images/promo1.jpg" },
  { id: "2", img: "/images/promo2.jpg" },
  { id: "3", img: "/images/promo3.jpg" },
  { id: "4", img: "/images/promo4.jpg" },
  { id: "5", img: "/images/promo5.jpg" },
];

const Promo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerIdRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === promos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timerIdRef.current);
  }, [currentIndex]);

  return (
    <section className={styles.promo}>
      <ul
        className={styles.listSlide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {promos.map((promo) => (
          <li key={promo.id} className={styles.item}>
            <img className={styles.img} src={promo.img} alt="" />
          </li>
        ))}
      </ul>
      <Container className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Link className={styles.link} to="/catalog">
              Перейти в каталог
              <Icon name="iconArrow" className={styles.iconArrow} />
            </Link>
            <h2 className={styles.title}>
              Изысканные смесители для вашего интерьера
            </h2>
            <p className={styles.text}>
              Гарантируем высочайшую безопасность и надёжность в соответствии с
              международными стандартами качества.
            </p>
          </div>
          <BubbleList
            list={promos}
            currentIndex={currentIndex}
            onClick={handleClickSlide}
          />
        </div>
      </Container>
    </section>
  );
};

export default Promo;
