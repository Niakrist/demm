import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { clsx } from "../../utils/clsx";
import styles from "./DropDown.module.css";

const DropDown = ({ items, params, onToggleParams, name, type }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  // const [params, setParams] = useState([]);

  const handleToggleDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  // const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();

  // const handleToggleParams = (type, item) => {
  //   setParams((prev) => {
  //     const newParams = prev?.includes(item)
  //       ? prev.filter((el) => el !== item)
  //       : [...prev, item];
  //     const currentParams = new URLSearchParams(searchParams);
  //     const stringParams = newParams.join(",");
  //     currentParams.set(type, stringParams);
  //     navigate({ search: currentParams.toString() });
  //     return newParams;
  //   });
  // };

  return (
    <div className={type !== "link" ? styles.dropDown : null}>
      <button
        onClick={handleToggleDropDown}
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
                          params?.includes(item.id) && styles.active
                        )}
                      />
                      <input
                        className={styles.checkBox}
                        type="checkbox"
                        checked={params?.includes(item.id)}
                        onChange={() => {
                          onToggleParams(item.id);
                        }}
                      />
                      <span
                        className={clsx(
                          styles.textCheckbox,
                          params?.includes(item.id) && styles.activeText
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
