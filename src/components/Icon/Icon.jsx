import React from "react";
import Address from "./icons/Address";
import CartIcon from "./icons/CartIcon";
import CheckboxIcon from "./icons/CheckboxIcon";
import DropDownIcon from "./icons/DropDownIcon";
import IconArrow from "./icons/IconArrow";
import LogoIcon from "./icons/LogoIcon";
import SearchIcon from "./icons/SearchIcon";
import StockIcon from "./icons/StockIcon";
import UserIcon from "./icons/UserIcon";
import Whatsapp from "./icons/Whatsapp";

const Icon = ({ name, className }) => {
  const icons = {
    userIcon: <UserIcon className={className} />,
    searchIcon: <SearchIcon className={className} />,
    stockIcon: <StockIcon className={className} />,
    cartIcon: <CartIcon className={className} />,
    iconArrow: <IconArrow className={className} />,
    logoIcon: <LogoIcon className={className} />,
    checkboxIcon: <CheckboxIcon className={className} />,
    whatsapp: <Whatsapp className={className} />,
    address: <Address className={className} />,
    dropDownIcon: <DropDownIcon className={className} />,
  };

  return icons[name];
};

export default Icon;
