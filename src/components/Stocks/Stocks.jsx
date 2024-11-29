import React, { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import StockItem from "./StockItem/StockItem";
import styles from "./Stocks.module.css";

const stocks = [
  {
    id: 1,
    img: "/images/stock1.jpg",
    title: "Скидка 15% на все смесители",
    term: "11.11.2023",
    text: "Предлагаем смесители для кухни, ванны, душа по низким ценам! Акция действует только на товары в наличии.",
  },
  {
    id: 2,
    img: "/images/stock2.jpg",
    title: "Осенняя распродажа сантехнических аксессуаров для ванной комнаты",
    term: "30.11.2023",
    text: "Большой выбор аксессуаров для ванной со скидками до 40%. Товары со скидкой отмечены в каталоге красной табличкой SALE.",
  },
  {
    id: 3,
    img: "/images/stock3.jpg",
    title: "Душевые системы по выгодным ценам!",
    term: "31.12.2023 ",
    text: "Душевые системы, стойки и гарнитуры по выгодным ценам. Доставка в любой регион России. Гарантия от производителя.",
  },
  {
    id: 4,
    img: "/images/stock1.jpg",
    title: "Скидка 15% на все смесители",
    term: "11.11.2023",
    text: "Предлагаем смесители для кухни, ванны, душа по низким ценам! Акция действует только на товары в наличии.",
  },
];

const Stocks = () => {
  const [stockList, setStockList] = useState(
    [...stocks].slice(0, window.innerWidth > 1279 ? 3 : 4)
  );

  useEffect(() => {
    const handleResize = () => {
      setStockList([...stocks].slice(0, window.innerWidth > 1279 ? 3 : 4));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stocks]);

  return (
    <section className={styles.stocks}>
      <Container className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Актуальные акции</h2>
          <Button className={styles.btn}>
            Все акции <Icon name="iconArrow" className={styles.iconArrow} />
          </Button>
        </div>

        <ul className={styles.list}>
          {stockList.map((stock) => (
            <li key={stock.id}>
              <StockItem stock={stock} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Stocks;
