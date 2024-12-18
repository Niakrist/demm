import { useSelector } from "react-redux";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";

const Pagination = () => {
  const { page, pages } = useSelector((state) => state.products);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  const cropPagesArray = pagesArray.slice(0, 7);

  return (
    <ul className={styles.list}>
      {cropPagesArray.map((p) => (
        <li
          key={p}
          className={clsx(styles.item, page === p && styles.itemActive)}>
          <Link to={`/catalog/?page=${p}`} className={styles.btn}>
            {p}
          </Link>
        </li>
      ))}
      <li>
        <button className={styles.btnNext}>
          <Icon name="iconArrow" className={styles.iconArrow} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
