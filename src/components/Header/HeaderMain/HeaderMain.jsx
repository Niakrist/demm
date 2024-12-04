import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import logoSrc from "../../../assets/images/logo.png";
import styles from "./HeaderMain.module.css";
import Search from "../../../ui/Search/Search";
import Button from "../../../ui/Button/Button";
import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu";
import LinkIcon from "../../../ui/LinkIcon/LinkIcon";
import PhoneGroup from "../../../ui/PhoneGroup/PhoneGroup";

const HeaderMain = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.wrapper}>
        <Link className={styles.link} to="/">
          <img className={styles.logoImg} src={logoSrc} alt="Логотип Demm" />
        </Link>
        <Search />
        <div className={styles.communication}>
          <PhoneGroup className={styles.phone} />
          <Button className={styles.btn}>Заказать звонок</Button>
          <div className={styles.linkIcon}>
            <LinkIcon to="/user" name="userIcon" />
          </div>
          <div className={styles.linkIcon}>
            <LinkIcon to="/cart" name="cartIcon" inCart={2} />
          </div>
          <BurgerMenu />
        </div>
      </Container>
    </div>
  );
};

export default HeaderMain;
