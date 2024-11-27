import React from "react";
import styles from "./Header.module.css";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </header>
  );
};

export default Header;
