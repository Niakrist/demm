import { useEffect, useRef } from "react";
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
import { useQueryParam } from "../../hooks/useQueryParam";

const Catalog = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // const [URLSearchParams] = useSearchParams();
  // const currentCategory = URLSearchParams.get("category");
  // const page = URLSearchParams.get("page");

  // const params = currentCategory ? { category: currentCategory } : "";

  const { searchParams } = useQueryParam();

  useEffect(() => {
    dispatch(fetchProducts(searchParams));
  }, [dispatch, searchParams]);

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.catalog}>
          <Container>
            <h1 className={styles.title}>
              Каталог
              {/* {currentCategory ? categories?.[currentCategory] : "Каталог"} */}
            </h1>
            <CatalogNav />
            <div className={styles.wrapper}>
              <aside>
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
