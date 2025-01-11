import React from "react";
import { useState } from "react";
import { transformObjectInArr } from "../../../utils/transformObjectInArr";
import Icon from "../../Icon/Icon";
import styles from "./Characteristic.module.css";

const Characteristic = ({ data }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  if (!data) return;
  return (
    <>
      <h2 className={styles.title}>Характеристики</h2>
      <div className={isShow ? styles.tableWrapperActive : styles.tableWrapper}>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            {data.map((item) => (
              <tr className={styles.row} key={item.id}>
                <td className={styles.id}>{item.id}</td>
                <td className={styles.name}>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={styles.btn} onClick={handleClick}>
        {isShow ? "Скрыть характеристики" : "Показать все характеристики"}
        <Icon
          name="iconArrow"
          className={isShow ? styles.iconArrowActive : styles.iconArrow}
        />
      </button>
    </>
  );
};

export default Characteristic;
