import React from "react";
import Input from "../../../ui/Input/Input";
import InputField from "../../../ui/InputField/InputField";
import { clsx } from "../../../utils/clsx";
import styles from "./Delivery.module.css";

const Delivery = ({ inCart, costumerInfo, onChange, errors, handleSubmit }) => {
  return (
    <div className={styles.delivery}>
      {!!inCart.length && (
        <>
          <h2 className={styles.deliveryTitle}>Адрес доставки</h2>
          <form id="cartFrom" onSubmit={handleSubmit} className={styles.form}>
            <InputField
              className={clsx(styles.input, errors.name && styles.inputError)}
              type="text"
              name="name"
              placeholder="ФИО"
              value={costumerInfo.name}
              onChange={onChange}
              error={errors.name}
            />
            <InputField
              className={clsx(styles.input, errors.phone && styles.inputError)}
              type="tel"
              name="phone"
              placeholder="79998887766"
              value={costumerInfo.phone}
              onChange={onChange}
              error={errors.phone}
            />
            <InputField
              className={clsx(styles.input, errors.email && styles.inputError)}
              type="email"
              name="email"
              placeholder="E-Mail"
              value={costumerInfo.email}
              onChange={onChange}
              error={errors.email}
            />
            <InputField
              className={clsx(styles.input, errors.city && styles.inputError)}
              type="text"
              name="city"
              placeholder="Город"
              value={costumerInfo.city}
              onChange={onChange}
              error={errors.city}
            />
            <InputField
              className={clsx(styles.input, errors.street && styles.inputError)}
              type="text"
              name="street"
              placeholder="Улица, дом"
              value={costumerInfo.street}
              onChange={onChange}
              error={errors.street}
            />
            <InputField
              className={clsx(styles.input, errors.flat && styles.inputError)}
              type="number"
              name="flat"
              placeholder="Квартира"
              value={costumerInfo.flat}
              onChange={onChange}
              error={errors.flat}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Delivery;
