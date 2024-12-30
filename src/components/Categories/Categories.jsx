import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Categories.module.css";
import { useSelector } from "react-redux";
import { transformObjectInArr } from "../../utils/transformObjectInArr";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);

  if (!categories) return;

  const categoriesList = transformObjectInArr(categories);

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.categorise}>
          <div className={styles.leftTop}>
            <Link
              to={`/catalog/?category=${categoriesList[0].id}`}
              className={styles.cat1}
            >
              <h3 className={styles.title}>Смесители</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
            <Link
              to={`/catalog/?category=${categoriesList[1].id}`}
              className={styles.cat2}
            >
              <h3 className={styles.title}>Душевые системы</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
          </div>
          <div className={styles.leftBottom}>
            <Link
              to={`/catalog/?category=${categoriesList[2].id}`}
              className={styles.cat4}
            >
              <h3 className={styles.title}>Душевые стойки</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
            <Link
              to={`/catalog/?category=${categoriesList[3].id}`}
              className={styles.cat5}
            >
              <h3 className={styles.title}>Изливы</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link
              to={`/catalog/?category=${categoriesList[4].id}`}
              className={styles.cat3}
            >
              <h3 className={styles.title}>Аксессуары</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
