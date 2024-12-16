import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { useQueryParam } from "../../hooks/useQueryParam";
import { clsx } from "../../utils/clsx";
import styles from "./DropDown.module.css";

const DropDown = ({ items, name, type }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const { updateQueryParams, filter, searchParams } = useQueryParam();

  const handleToggle = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <div className={type !== "link" ? styles.dropDown : null}>
      <button
        onClick={handleToggle}
        className={
          type !== "link" ? styles.dropDownBtn : styles.dropDownBtnSmall
        }>
        {name}
        <Icon
          name="dropDownIcon"
          className={clsx(
            styles.dropDownIcon,
            isOpenDropDown && styles.dropDownIconActive
          )}
        />
      </button>
      <ul
        className={clsx(styles.dropDownList, isOpenDropDown && styles.active)}>
        {isOpenDropDown && (
          <>
            {type === "link"
              ? items.map((item) => (
                  <li key={item.id} className={styles.dropDownItem}>
                    <Link
                      to={`/catalog/?category=${item.id}`}
                      className={styles.dropDownLink}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : items.map((item) => (
                  <li key={item.id} className={styles.dropDownItemFilter}>
                    <label className={styles.label}>
                      <Icon
                        name="checkboxFilter"
                        className={clsx(
                          styles.checkboxFilter,
                          filter[type].includes(item.id) && styles.active
                        )}
                      />
                      <input
                        className={styles.checkBox}
                        type="checkbox"
                        checked={filter[type].includes(item.id)}
                        onChange={() => updateQueryParams(type, item.id)}
                      />
                      <span
                        className={clsx(
                          styles.textCheckbox,
                          filter[type].includes(item.id) && styles.activeText
                        )}>
                        {item.name}
                      </span>
                    </label>
                  </li>
                ))}
          </>
        )}
      </ul>
    </div>
  );

  if (type === "checkbox") {
  }
};

export default DropDown;
