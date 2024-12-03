import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./DropDown.module.css";

const DropDown = ({ items, name, type }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const handleToggle = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <>
      <button onClick={handleToggle} className={styles.dropDown}>
        {name}{" "}
        <Icon
          name="dropDownIcon"
          className={clsx(
            styles.dropDownIcon,
            isOpenDropDown && styles.dropDownIconActive
          )}
        />
      </button>
      <ul className={styles.dropDownList}>
        {isOpenDropDown && (
          <>
            {type === "link"
              ? items.map((item) => (
                  <li key={item.id} className={styles.dropDownItem}>
                    <Link to={`/${item.id}`} className={styles.dropDownLink}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : items.map((item) => (
                  <li key={item.id} className={styles.dropDownItem}>
                    <input type="checkbox" id={item.id} />{" "}
                    <label htmlFor={item.id}>{item.name}</label>
                  </li>
                ))}
          </>
        )}
      </ul>
    </>
  );

  if (type === "checkbox") {
  }
};

export default DropDown;
