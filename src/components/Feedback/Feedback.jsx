import React from "react";
import Container from "../Container/Container";
import FormFeedback from "../FormFeedback/FormFeedback";
import Icon from "../Icon/Icon";
import styles from "./Feedback.module.css";

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Icon name="logoIcon" className={styles.logoIcon} />
          </div>
          <h2 className={styles.title}>Остались вопросы?</h2>
          <p className={styles.text}>
            Заполните форму, мы свяжемся с вами в ближайшее время, ответим на
            все вопросы и предоставим консультацию по ассортименту.
          </p>

          <FormFeedback />
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
