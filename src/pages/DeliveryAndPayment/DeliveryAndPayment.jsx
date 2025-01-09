import styles from "./DeliveryAndPayment.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";

const DeliveryAndPayment = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs />
        <section className={styles.delivery}>
          <Container>
            <h1 className={styles.title}>
              Условия доставки и оплаты сантехники
            </h1>

            <h2 className={styles.subTitle}>Оплата</h2>

            <p className={styles.text}>
              При оформлении заказа в корзине вы можете выбрать вариант
              безналичной оплаты. Мы принимаем карты Visa и MasterCard. Чтобы
              оплатить покупку, вас перенаправит на платежную систему банка, где
              вы должны ввести номер карты, срок действия и имя держателя. Также
              вы можете выбрать различные системы при оплате картой. Доступны:
              СБП, Тинькофф ПЭЙ, Сбер ПЭЙ, Яндекс ПЭЙ.
            </p>

            <p className={styles.text}>
              Вам могут отказать от авторизации в случае:
            </p>

            <ul className={styles.list}>
              <li className={styles.item}>
                Если ваш банк не поддерживает технологию 3D-Secure.
              </li>
              <li className={styles.item}>
                На карте недостаточно средств для покупки.
              </li>
              <li className={styles.item}>
                Банк не поддерживает услугу платежей в интернете.
              </li>
              <li className={styles.item}>
                Истекло время ожидания ввода данных.
              </li>

              <li className={styles.item}>В данных была допущена ошибка.</li>
            </ul>

            <p className={styles.text}>
              В этом случае вы можете повторить авторизацию через 20 минут,
              воспользоваться другой картой или обратиться в свой банк для
              решения вопроса.
            </p>

            <h2 className={styles.subTitle}>Доставка</h2>
            <ol>
              <li className={styles.item}>
                Доставка заказов по Москве за пределы Московской Кольцевой
                Автомобильной Дороги (МКАД), в населенные пункты Подмосковья и
                других регионов России осуществляется транспортной компанией
                СДЭК.
              </li>
              <li className={styles.item}>
                Если в вашем населенном пункте отсутствуют пункты выдачи заказов
                СДЭК, в таком случае доставка осуществляется до ближайшего
                отделения СДЭК в регионе покупателя.
              </li>
              <li className={styles.item}>
                Доступны два варианта доставки: до пункта самовывоза СДЭК и до
                адреса клиента
              </li>
              <li className={styles.item}>
                С момента передачи товара по заказу покупателя, ответственность
                за сохранность товара до момента вручения покупателю переходит
                компании СДЭК, на основании документа акта приема-передачи.
              </li>
              <li className={styles.item}>
                Заказ сделанный с 15:00 до 23:59 передается в СДЭК через один
                рабочий день.
              </li>
              <li className={styles.item}>
                Оплаченный заказ в пятницу, выходные или праздничные дни
                передается в СДЭК на второй рабочий день после выходных или
                праздничных дней.
              </li>
              <li className={styles.item}>
                Покупателю так же доступна услуга экспресс доставки по г. Москва
                в пределах МКАД, все условия по ней дополнительно можно узнать у
                менеджера интернет-магазина по телефону, в чате Telegram или
                WhatsApp.
              </li>
              <li className={styles.item}>
                При получении заказа, доставленного транспортной компанией,
                пожалуйста, убедитесь в целостности упаковки.
              </li>
            </ol>
          </Container>
        </section>
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default DeliveryAndPayment;
