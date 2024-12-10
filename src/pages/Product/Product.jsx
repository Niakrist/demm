import React from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />

        <ProductItem />

        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default Product;
