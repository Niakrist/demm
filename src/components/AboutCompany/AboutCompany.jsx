import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./AboutCompany.module.css";
const AboutCompany = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.wrapper}>
        <div className={styles.imagesWrapper}>
          <img
            className={styles.images}
            src="./images/company.jpg"
            alt="company"
          />
          <div className={styles.smallImgWrapper}>
            <img
              className={styles.smallImg}
              src="./images/worker.jpg"
              alt="worker"
            />
          </div>
        </div>
        <h2 className={styles.title}>О компании</h2>
        <p className={styles.text}>
          Компания DEMM, созданная в Марментино, провинция Брешиа, работает в
          сфере производства кранов и ванных комнат в течение последних 50 лет.
          Компания DEMM постоянно инвестирует в исследования и разработку новых
          продуктов с целью обеспечения максимальной эффективности при
          одновременном обеспечении качества и дизайна.
        </p>
        <p className={styles.textStrong}>
          «Гарантируем высочайшую безопасность и надёжность в соответствии с
          международными стандартами качества»
        </p>
        <p className={styles.textDown}>
          Мы производим обширную коллекцию изысканных и современных смесителей и
          душевых кабин. Изготавливаем продукцию в очень короткие сроки. Мы
          динамичны, дружелюбны и всегда рады сотрудничеству!
        </p>
        <Link className={styles.btn} to="/about">
          Подробнее <Icon name="iconArrow" className={styles.iconArrow} />
        </Link>
      </Container>
    </section>
  );
};

export default AboutCompany;
