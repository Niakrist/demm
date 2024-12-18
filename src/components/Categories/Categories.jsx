import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.categorise}>
          <div className={styles.leftTop}>
            <Link to="" className={styles.cat1}>
              <h3 className={styles.title}>Смесители</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
            <Link to="" className={styles.cat2}>
              <h3 className={styles.title}>Душевые системы</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
          </div>
          <div className={styles.leftBottom}>
            <Link to="" className={styles.cat4}>
              <h3 className={styles.title}>Душевые стойки</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
            <Link to="" className={styles.cat5}>
              <h3 className={styles.title}>Изливы</h3>
              <div className={styles.shevron}>
                <Icon name="iconArrow" className={styles.arrowIcon} />
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link to="" className={styles.cat3}>
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
