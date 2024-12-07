import styles from "./SlideItem.module.css";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
const SlideItem = ({ product }) => {
  return (
    <article className={styles.item}>
      <img
        className={styles.img}
        src={`http://localhost:3024/img/${product.img_src}`}
        alt=""
      />
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <Link to={`/catalog/${product.id}`} className={styles.link}>
          Смотреть <Icon className={styles.icon} name="iconArrow" />
        </Link>
      </div>
    </article>
  );
};

export default SlideItem;
