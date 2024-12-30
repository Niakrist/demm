import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const { id } = useParams();
  const location = useLocation();

  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  const { productItem } = useSelector((state) => state.productItem);
  console.log("productItem: ", productItem);

  const urlParams = new URLSearchParams(location?.search);
  const params = Object.fromEntries(urlParams);

  if (isLoading) return;
  if (error) <p>{error.message}</p>;

  return (
    <Container>
      <ul className={styles.breadcrumbs}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Главная
          </Link>
        </li>
        {location.pathname.includes("/catalog") && (
          <li className={styles.item}>
            <Link to="/catalog" className={styles.link}>
              Каталог
            </Link>
          </li>
        )}
        {location.search.includes("category") && (
          <li className={styles.item}>
            <Link
              to={`/catalog?/category=${params.category}`}
              className={styles.link}
            >
              {categories[params.category]}
            </Link>
          </li>
        )}
        {id && productItem && (
          <>
            <li className={styles.item}>
              <Link
                to={`/catalog?/category=${productItem.category}`}
                className={styles.link}
              >
                {productItem.categoryRus}
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={`/catalog/${productItem.id}`} className={styles.link}>
                {productItem.title}
              </Link>
            </li>
          </>
        )}
        {location.pathname.includes("/delivery-and-payment") && (
          <li className={styles.item}>
            <Link to="/delivery-and-payment" className={styles.link}>
              Условия доставки и оплаты сантехники
            </Link>
          </li>
        )}
        {location.pathname.includes("/about") && (
          <li className={styles.item}>
            <Link to="/about" className={styles.link}>
              О Компании
            </Link>
          </li>
        )}
        {location.pathname.includes("/shop") && (
          <li className={styles.item}>
            <Link to="/shop" className={styles.link}>
              О магазине
            </Link>
          </li>
        )}
        {location.pathname.includes("/contacts") && (
          <li className={styles.item}>
            <Link to="/contacts" className={styles.link}>
              Контакты
            </Link>
          </li>
        )}
        {location.pathname.includes("/cart") && (
          <li className={styles.item}>
            <Link to="/cart" className={styles.link}>
              Корзина
            </Link>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Breadcrumbs;
