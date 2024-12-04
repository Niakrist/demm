import React from "react";
import { transformObjectInArr } from "../../../utils/transformObjectInArr";
import styles from "./Characteristic.module.css";

const Characteristic = ({ data }) => {
  if (!data) return;

  const dataTable = transformObjectInArr(data);

  return (
    <div className={styles.characteristic}>
      <h2 className={styles.title}>Характеристики</h2>
      <table>
        <thead></thead>
        <tbody>
          {dataTable.map((item) => (
            <tr className={styles.row} key={item.id}>
              <td className={styles.id}>{item.id}</td>
              <td className={styles.name}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characteristic;
