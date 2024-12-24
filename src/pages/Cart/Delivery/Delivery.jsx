import React from "react";
import Input from "../../../ui/Input/Input";
import styles from "./Delivery.module.css";

const Delivery = ({ inCart, costumerInfo, onChange, errors, handleSubmit }) => {
  return (
    <div className={styles.delivery}>
      {!!inCart.length && (
        <>
          <h2 className={styles.deliveryTitle}>Адрес доставки</h2>
          <form id="cartFrom" onSubmit={handleSubmit} className={styles.form}>
            <Input
              type="text"
              name="name"
              placeholder="ФИО"
              value={costumerInfo.name}
              onChange={onChange}
              error={errors.name}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="79998887766"
              value={costumerInfo.phone}
              onChange={onChange}
              error={errors.phone}
            />
            <Input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={costumerInfo.email}
              onChange={onChange}
              error={errors.email}
            />
            <Input
              type="text"
              name="city"
              placeholder="Город"
              value={costumerInfo.city}
              onChange={onChange}
              error={errors.city}
            />
            <Input
              type="text"
              name="street"
              placeholder="Улица, дом"
              value={costumerInfo.street}
              onChange={onChange}
              error={errors.street}
            />
            <Input
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
