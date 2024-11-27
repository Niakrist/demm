import React from "react";
import CartIcon from "./icons/CartIcon";
import IconArrow from "./icons/IconArrow";
import SearchIcon from "./icons/SearchIcon";
import StockIcon from "./icons/StockIcon";
import UserIcon from "./icons/UserIcon";

const Icon = ({ name, className }) => {
  const icons = {
    userIcon: <UserIcon className={className} />,
    searchIcon: <SearchIcon className={className} />,
    stockIcon: <StockIcon className={className} />,
    cartIcon: <CartIcon className={className} />,
    iconArrow: <IconArrow className={className} />,
  };

  return icons[name];
};

export default Icon;
