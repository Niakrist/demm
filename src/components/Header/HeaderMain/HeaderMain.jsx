import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import logoSrc from "../../../assets/images/logo.png";
import styles from "./HeaderMain.module.css";
import Search from "../../../ui/Search/Search";
import Button from "../../../ui/Button/Button";
import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu";
import LinkIcon from "../../../ui/LinkIcon/LinkIcon";
import PhoneGroup from "../../../ui/PhoneGroup/PhoneGroup";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/modalSlice/modalSlice";

const HeaderMain = () => {
  const { inCart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal(true));
  };

  return (
    <div className={styles.main}>
      <Container className={styles.wrapper}>
        <Link className={styles.link} to="/">
          <img className={styles.logoImg} src={logoSrc} alt="Логотип Demm" />
        </Link>
        <Search />
        <div className={styles.communication}>
          <PhoneGroup className={styles.phone} />
          <Button onClick={handleClick} className={styles.btn}>
            Заказать звонок
          </Button>
          <div className={styles.linkIcon}>
            <LinkIcon to="/user" name="userIcon" />
          </div>
          <div className={styles.linkIcon}>
            <LinkIcon to="/cart" name="cartIcon" inCart={inCart} />
          </div>
          <BurgerMenu />
        </div>
      </Container>
    </div>
  );
};

export default HeaderMain;
