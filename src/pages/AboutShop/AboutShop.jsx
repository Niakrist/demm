import React from "react";
import styles from "./AboutShop.module.css";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";

const AboutShop = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.aboutShop}>
          <Container>
            <h1 className={styles.title}>О магазине</h1>
            <p className={styles.text}>
              Авторизованный интернет-магазин DEMM создан и работает в
              партнерстве с компаниями DEMM ( Via Leonardo da Vinci, 83, 20062
              Cassano d'Adda MI, Италия) и компанией X официальным
              дистрибьютером компании DEMM на территории Российской Федерации.
              Заказы, оформленные через интерфейс интернет-магазина, электронную
              или через мессенджеры ВацАпп, Телеграм по телефону. Приобретая
              товары в интернет-магазине, вы заключаете договор купли-продажи.
            </p>
            <p className={styles.text}>
              Приобретая продукцию DEMM на нашем сайте, вы получаете:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                Оригинальные сертифицированные смесители и аксессуары: Мы
                являемся официальным дилером DEMM, поэтому вы можете быть
                уверены в подлинности и высоком качестве нашей продукции.
              </li>
              <li className={styles.item}>
                Гарантийный срок: на всю продукцию DEMM предоставляется
                гарантия.
              </li>
              <li className={styles.item}>
                Сервис в течение всего срока службы: Мы предлагаем нашим
                клиентам услуги по обслуживанию и ремонту продукции DEMM в
                многих городах России.
              </li>
            </ul>
            <h2 className={styles.subTitle}>Почему стоит выбрать DEMM?</h2>
            <ol>
              <li className={styles.item}>
                Итальянское качество: Продукция DEMM производится в Италии из
                высококачественных материалов с использованием новейших
                технологий.
              </li>
              <li className={styles.item}>
                Стильный дизайн: Смесители и аксессуары DEMM отличаются стильным
                и современным дизайном, который прекрасно дополнит интерьер
                вашей ванной комнаты.
              </li>
              <li className={styles.item}>
                Функциональность: Продукция DEMM проста в использовании и
                обладает широким спектром функций.
              </li>
              <li className={styles.item}>
                Долговечность: Смесители и аксессуары DEMM прослужат вам долгие
                годы.
              </li>
              <li className={styles.item}>
                Закажите продукцию DEMM на сайте уже сегодня!
              </li>
            </ol>
            <h2 className={styles.subTitle}>Мы предлагаем:</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                Выгодные цены: у нас одни из самых выгодных цен на продукцию
                DEMM в России.
              </li>
              <li className={styles.item}>
                Удобную доставку: Мы осуществляем доставку продукции DEMM по
                всей России.
              </li>
              <li className={styles.item}>
                Профессиональную консультацию: Наши специалисты помогут вам
                выбрать подходящую модель смесителя или аксессуара.
              </li>
              <li className={styles.item}>
                Не упустите возможность купить оригинальную сантехнику DEMM по
                выгодной цене!
              </li>
            </ul>
            <p className={styles.text}>С уважением, команда</p>
          </Container>
        </section>
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default AboutShop;
