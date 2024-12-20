import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { cleanSearchText } from "../../store/searchSlice/searchSlice";
import styles from "./Header.module.css";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  console.log("location: ", location);
  useEffect(() => {
    dispatch(cleanSearchText());
  }, [location]);

  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </header>
  );
};

export default Header;
