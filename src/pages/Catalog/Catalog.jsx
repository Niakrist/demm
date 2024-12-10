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
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../store/productsSlice/productsSlice";

const Catalog = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const [URLSearchParams] = useSearchParams();
  const currentCategory = URLSearchParams.get("category");
  const page = URLSearchParams.get("page");

  useEffect(() => {
    dispatch(fetchProducts({ category: currentCategory, page: page }));
  }, [currentCategory, page]);

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <Container>
          <h1 className={styles.title}>
            {currentCategory ? categories[currentCategory] : "Каталог"}
          </h1>
          <CatalogNav />
          <div className={styles.wrapper}>
            <aside>
              <Filter />
            </aside>
            <ProductList products={products} />
          </div>
        </Container>
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
