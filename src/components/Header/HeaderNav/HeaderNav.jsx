import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinkCart from "../../../ui/LinkCart/LinkCart";
import { transformObjectInArr } from "../../../utils/transformObjectInArr";
import Container from "../../Container/Container";
import Icon from "../../Icon/Icon";
import styles from "./HeaderNav.module.css";
const HeaderNav = () => {
  const { categories } = useSelector((state) => state.categories);

  const categoriesList = transformObjectInArr(categories);

  return (
    <div className={styles.nav}>
      <Container className={styles.wrapper}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.stock} to="/">
                <Icon name="stockIcon" className={styles.stockIcon} />
                Акции
              </Link>
            </li>
            {categoriesList.map((category) => (
              <li key={category.id}>
                <Link
                  className={styles.link}
                  to={`/catalog/?category=${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.linkCart}>
          <LinkCart />
        </div>
      </Container>
    </div>
  );
};

export default HeaderNav;
