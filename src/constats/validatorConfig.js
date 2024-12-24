export const validatorConfig = {
  name: {
    isRus: { message: "Имя должно состоять из русских букв" },
    isLength: { message: "В имени должно быть больше одной буквы" },
    isRequired: { message: "Поле имя обязательное" },
  },
  email: {
    isRequired: { message: "Поле email обязательное" },
    isEmail: { message: "Почта не верная" },
  },
  phone: {
    isNumber: { message: "Телефон введен не корректно" },
    isLengthPhone: { message: "В телефон номер должно быть 11 чисел" },
  },
  city: {
    isRus: { message: "Город должно состоять из русских букв" },
    isLength: { message: "В городе должно быть больше одной буквы" },
    isRequired: { message: "Поле город обязательное" },
  },
  street: {
    isRequired: { message: "Поле Улица, дом обязательное" },
  },
  flat: {
    isRequired: { message: "Поле квартира обязательное" },
    isNumber: { message: "Номер квартиры введен не корректно" },
  },
  check: {
    isChecked: { message: "Примите условия политики конфедициальности" },
  },
};
