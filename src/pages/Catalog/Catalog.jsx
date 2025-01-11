import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Feedback from "../../components/Feedback/Feedback";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";

import styles from "./Catalog.module.css";
import CatalogNav from "./CatalogNav/CatalogNav";
import { fetchProducts } from "../../store/productsSlice/productsSlice";
import { useLocation, useParams } from "react-router-dom";

const Catalog = () => {
  const { products } = useSelector((state) => state.products);
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  const params = useParams();
  const loaction = useLocation();

  useEffect(() => {
    dispatch(fetchProducts(loaction.search));
  }, [dispatch, loaction, params]);

  const urlParams = new URLSearchParams(location?.search);
  const urlCategory = Object.fromEntries(urlParams);

  if (isLoading) return;

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.catalog}>
          <Container>
            <h1 className={styles.title}>
              {urlCategory?.category
                ? categories?.[urlCategory?.category]
                : "Каталог"}
            </h1>
            {!urlCategory?.category && <CatalogNav />}
            <div className={styles.wrapper}>
              <aside className={styles.aside}>
                <Filter />
              </aside>
              <ProductList products={products} />
            </div>
          </Container>
        </section>
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
