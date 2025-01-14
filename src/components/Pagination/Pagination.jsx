import { useSelector } from "react-redux";
import { clsx } from "../../utils/clsx";
import Icon from "../Icon/Icon";
import styles from "./Pagination.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { page, pages } = useSelector((state) => state.products);

  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  const cropPagesArray = pagesArray.slice(0, 7);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = (page) => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("page", String(page));
    navigate({ search: currentParams.toString() });
  };

  return (
    <>
      {pages > 1 && (
        <ul className={styles.list}>
          {cropPagesArray.map((p) => (
            <li key={p}>
              <button
                className={clsx(styles.item, page === p && styles.itemActive)}
                onClick={() => handleClick(p)}>
                {p}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick(filter.page + 1)}
              className={styles.btnNext}>
              <Icon name="iconArrow" className={styles.iconArrow} />
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Pagination;
