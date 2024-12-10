import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const { id } = useParams();

  const location = useLocation();

  console.log("location: ", location);

  return (
    <Container>
      <ul className={styles.breadcrumbs}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/catalog" className={styles.link}>
            Каталог
          </Link>
        </li>
        {/* {id && product && (
          <>
            <li className={styles.item}>
              <Link
                to={`/catalog/?category=${product.category}`}
                className={styles.link}>
                {product.categoryRus}
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={`/catalog/${product.id}`} className={styles.link}>
                {product.title}
              </Link>
            </li>
          </>
        )} */}
      </ul>
    </Container>
  );
};

export default Breadcrumbs;
