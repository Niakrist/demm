import React from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";

import styles from "./Contacts.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";

const Contacts = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.contacts}>
          <Container>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.row}>
              <address className={styles.address}>
                <div>
                  <p className={styles.subtitle}>Адрес</p>
                  <p className={styles.text}>
                    г. Новосибирск, улица, дом, офис
                  </p>
                </div>
                <div>
                  <p className={styles.subtitle}>Телефон</p>
                  <a className={styles.text} href="tel:79999999999">
                    +7 999 999-99-99
                  </a>
                </div>
                <div>
                  <p className={styles.subtitle}>Режим работы</p>
                  <p className={styles.text}>Пн. - Пт. с 10:00 до 18:00</p>
                  <p className={styles.text}>Сб. с 11:00 до 16:00</p>
                  <p className={styles.text}>Вс. выходной</p>
                </div>
                <div>
                  <p className={styles.subtitle}>E-mail</p>
                  <a className={styles.text} href="mailto:">
                    sale@yandex.ru
                  </a>
                </div>
              </address>
              <div className={styles.map}>
                <YMaps>
                  <Map
                    width={"640px"}
                    height={"300px"}
                    defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
                  >
                    <Placemark geometry={[55.751574, 37.573856]} />
                  </Map>
                </YMaps>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
